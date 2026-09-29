# website-portfolio

Personal portfolio of Rohit Suryadevara. Design heavily inspired by
[marcusstrauss.dev](https://marcusstrauss.dev) (with permission).

Astro + Tailwind v4 + GSAP, with a hand-written WebGL grain background. Fully static.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
```

## Editing content

All copy (roles, projects, stack, links) lives in `src/data/content.ts`.
Components only render it.

## Layout

- `src/pages/index.astro`: page shell, frame, preloader, layering
- `src/components/`: sidebar, sections, shared carousel
- `src/scripts/`: section router, carousel input, reveal animations, title cycler
- `src/background/`: WebGL grain scene and shaders
