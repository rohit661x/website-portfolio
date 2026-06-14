import RepoMenu from "@/components/RepoMenu";

const featured: {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  href?: string;
  repos: { label: string; href: string }[];
  note?: string;
} = {
  title: "MAP — Model-Agnostic Probabilistic Attribution for Prompt Reversal",
  description:
    "A statistical framework that identifies which language model produced a given output, classifying source models across 13 model families through black-box probing and probabilistic attribution. Presented at the Canadian Statistics Student Conference (Statistical Society of Canada).",
  highlights: [
    "Probabilistic attribution method to identify language-model sources using black-box probing and statistical classification across 13 model families.",
    "90%+ attribution accuracy on held-out data, outperforming baseline heuristics and providing uncertainty estimates for ambiguous cases.",
    "Generated attribution scores for 10K+ prompts across GPT, Claude, Llama, Gemini, Mistral and other families, supporting prompt-injection analysis and model fingerprinting.",
  ],
  tags: ["LLM Evaluation", "Python", "PyTorch", "NumPy/SciPy"],
  href: undefined,
  repos: [],
  note: "Paper & code — coming soon",
};

const secondary: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}[] = [
  {
    title: "Bastion — Scam-Detecting AI Email Assistant (IBM AI Builders Challenge)",
    description:
      "An LLM-security project: an injection-resilient agent that triages untrusted inbound content (emails, invoices, support tickets) while reducing the risk of prompt injection, tool misuse, data exfiltration, and unsafe instruction-following.",
    tags: ["LangGraph", "IBM Granite", "LoRA", "Garak"],
  },
  {
    title: "KuiperHunter — 3D U-Net for Object Detection in Deep Space",
    description:
      "A custom 3D U-Net in PyTorch for faint moving-object detection in astronomical images, targeting TNOs below standard noise thresholds, with a synthetic source-injection pipeline that generates training data at controlled signal-to-noise ratios for added robustness.",
    tags: ["Deep Learning", "Computer Vision", "Python", "PyTorch"],
  },
  {
    title: "Neuroplasticity-Inspired Deep Learning Optimizer",
    description:
      "A meta-learning framework to evaluate learning-rate schedules and optimizer design; a custom optimizer with dynamic sparsity regularization reached 52% model sparsity while holding 98% accuracy on MNIST for neural-network compression.",
    tags: ["Meta-Learning", "Hyperparameter Optimization", "Model Compression", "PyTorch / TensorFlow"],
  },
];

const GITHUB = "https://github.com/rohit661x";

export default function Projects() {
  return (
    <section className="animate-fade-in-up" id="projects">
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-h3 text-primary">Projects</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          02 // Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {/* Featured — spans two rows */}
        <div
          className="shimmer relative border-architectural p-lg md:row-span-2 flex flex-col"
          style={{
            background:
              "linear-gradient(150deg, rgba(109,92,255,0.12), rgba(168,85,247,0.06))",
          }}
        >
          <span className="font-meta-technical text-[11px] text-on-surface-variant">
            Featured
          </span>
          <h3 className="font-h3 text-h3 text-primary mt-sm mb-sm">
            {featured.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            {featured.description}
          </p>
          <ul className="flex flex-col gap-xs mb-md">
            {featured.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-sm font-meta-technical text-meta-technical text-on-surface-variant"
              >
                <span className="text-[color:var(--accent)] mt-[2px] shrink-0">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-xs flex-wrap mb-lg">
            {featured.tags.map((t) => (
              <span
                key={t}
                className="bg-surface-container px-sm py-xs font-meta-technical text-[10px] text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-sm flex-wrap items-center mt-auto">
            {featured.href && (
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-md py-sm font-label-caps text-label-caps text-white inline-flex items-center gap-sm"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  language
                </span>
                Live website
              </a>
            )}
            {featured.repos.length > 0 && <RepoMenu repos={featured.repos} />}
            {!featured.href && featured.repos.length === 0 && featured.note && (
              <span className="font-meta-technical text-meta-technical text-on-surface-variant inline-flex items-center gap-sm">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  schedule
                </span>
                {featured.note}
              </span>
            )}
          </div>
        </div>

        {/* Secondary cards — interactive only when a link exists */}
        {secondary.map((p) => {
          const inner = (
            <>
              <div className="flex items-center justify-between mb-sm">
                <h3
                  className={`font-body-md text-body-md font-bold text-primary transition-colors ${
                    p.href ? "group-hover:text-[color:var(--accent)]" : ""
                  }`}
                >
                  {p.title}
                </h3>
                {p.href && (
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-[color:var(--accent)] transition-colors">
                    arrow_forward
                  </span>
                )}
              </div>
              <p className="font-meta-technical text-meta-technical text-on-surface-variant mb-md">
                {p.description}
              </p>
              <div className="flex gap-xs flex-wrap mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-surface-container px-sm py-xs font-meta-technical text-[10px] text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          );
          return p.href ? (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tile-lift group border-architectural p-md flex flex-col bg-surface-container-lowest"
            >
              {inner}
            </a>
          ) : (
            <div
              key={p.title}
              className="group border-architectural p-md flex flex-col bg-surface-container-lowest"
            >
              {inner}
            </div>
          );
        })}

        {/* More on GitHub — fills the grid, sends to profile */}
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="tile-lift group border-architectural p-md flex items-center justify-between bg-surface-container-lowest"
        >
          <div className="flex flex-col">
            <span className="font-body-md text-body-md font-bold text-primary group-hover:text-[color:var(--accent)] transition-colors">
              More on GitHub
            </span>
            <span className="font-meta-technical text-meta-technical text-on-surface-variant">
              Side projects, experiments &amp; source
            </span>
          </div>
          <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-[color:var(--accent)] transition-colors">
            open_in_new
          </span>
        </a>
      </div>
    </section>
  );
}
