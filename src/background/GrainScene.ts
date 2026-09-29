import { fragmentShader, vertexShader } from "./shaders";

type Params = { center: [number, number]; radius: number };

const DESKTOP: Params = { center: [0.26, 0.36], radius: 0.8 };
const MOBILE: Params = { center: [0.22, 0.3], radius: 0.62 };

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.trim().replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/**
 * Full-screen WebGL grain background. One triangle, one draw call per frame.
 * Falls back to the container's solid colour if WebGL is unavailable.
 */
export class GrainScene {
  private gl: WebGLRenderingContext;
  private canvas: HTMLCanvasElement;
  private program: WebGLProgram;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private raf = 0;
  private start = performance.now();
  private params: Params;
  private offset = [0, 0];
  private target = [0, 0];
  private running = false;
  private isStatic: boolean;
  private minFrameMs: number;
  private lastFrame = 0;

  static mount(container: HTMLElement, opts: { isStatic?: boolean } = {}): GrainScene | null {
    try {
      return new GrainScene(container, opts.isStatic ?? false);
    } catch (err) {
      console.warn("Background disabled:", err);
      return null;
    }
  }

  private constructor(container: HTMLElement, isStatic: boolean) {
    this.isStatic = isStatic;
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
    this.canvas.setAttribute("aria-hidden", "true");

    const gl = this.canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) throw new Error("WebGL unavailable");
    this.gl = gl;

    // Software renderers struggle at 60fps; cap them at 30
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    this.minFrameMs = /swiftshader|llvmpipe|software/i.test(renderer) ? 1000 / 30 : 0;

    this.program = this.createProgram();
    gl.useProgram(this.program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(this.program, "aPosition");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    for (const name of ["uResolution", "uTime", "uCenter", "uRadius", "uTint", "uBackground"]) {
      this.uniforms[name] = gl.getUniformLocation(this.program, name);
    }
    const css = getComputedStyle(document.documentElement);
    gl.uniform3fv(this.uniforms.uTint, hexToRgb(css.getPropertyValue("--color-accent") || "#b79cff"));
    gl.uniform3fv(this.uniforms.uBackground, hexToRgb(css.getPropertyValue("--color-background") || "#0c0b0f"));

    this.params = DESKTOP;
    container.appendChild(this.canvas);
    this.resize();

    window.addEventListener("resize", this.resize);
    window.addEventListener("pointermove", this.onPointer, { passive: true });
    document.addEventListener("visibilitychange", this.onVisibility);
  }

  private createProgram(): WebGLProgram {
    const gl = this.gl;
    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) ?? "shader compile failed");
      }
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) ?? "program link failed");
    }
    return program;
  }

  private resize = () => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    this.params = mobile ? MOBILE : DESKTOP;
    const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);
    this.canvas.width = w;
    this.canvas.height = h;
    this.gl.viewport(0, 0, w, h);
    this.gl.uniform2f(this.uniforms.uResolution, w, h);
    this.gl.uniform1f(this.uniforms.uRadius, this.params.radius);
    if (this.isStatic) this.draw(0);
  };

  private onPointer = (e: PointerEvent) => {
    // The glow drifts a little toward the pointer
    this.target[0] = (e.clientX / window.innerWidth - 0.5) * 0.04;
    this.target[1] = -(e.clientY / window.innerHeight - 0.5) * 0.04;
  };

  private onVisibility = () => {
    if (document.hidden) this.stop();
    else this.play();
  };

  private draw(time: number) {
    const gl = this.gl;
    this.offset[0] += (this.target[0] - this.offset[0]) * 0.04;
    this.offset[1] += (this.target[1] - this.offset[1]) * 0.04;
    gl.uniform1f(this.uniforms.uTime, time);
    gl.uniform2f(
      this.uniforms.uCenter,
      this.params.center[0] + this.offset[0],
      this.params.center[1] + this.offset[1],
    );
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  private tick = (now: number) => {
    this.raf = requestAnimationFrame(this.tick);
    if (now - this.lastFrame < this.minFrameMs) return;
    this.lastFrame = now;
    this.draw((now - this.start) / 1000);
  };

  play() {
    if (this.isStatic) {
      this.draw(0);
      return;
    }
    if (this.running) return;
    this.running = true;
    this.raf = requestAnimationFrame(this.tick);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  destroy() {
    this.stop();
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("pointermove", this.onPointer);
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.canvas.remove();
  }
}
