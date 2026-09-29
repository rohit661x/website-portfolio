// All site content lives here. Components only render it.

export const profile = {
  name: "Rohit Suryadevara",
  titles: ["ML Engineer", "AI Developer", "Data Engineer", "Mathematics @ McMaster"],
  description:
    "Rohit Suryadevara is a mathematics student at McMaster University and AI Developer at IG Wealth Management, building machine learning models, AI systems, and research on LLM safety.",
  home: [
    "I think in systems, dig for root causes, and build for change.",
    "Hard problems are the interesting ones.",
    "Fast is good, correct is better, and trusted is the whole point.",
    "I build things meant to outlast the reason I started them.",
  ],
  bio: "I'm a mathematics student at McMaster University working where statistics meets machine learning. At IG Wealth Management I build agentic, compliance-grade AI systems on GCP; on the research side I work with Cohere Labs on black-box LLM attribution and safety. Away from the terminal it's quant finance (34th in Citadel's Australian Trading Invitational), chess, basketball, the gym, cars and video games.",
};

export const links = {
  email: "rohit.suryadevara.661@gmail.com",
  github: "https://github.com/rohit661x",
  linkedin: "https://www.linkedin.com/in/RohitSuryadevara",
};

export type Role = {
  org: string;
  role: string;
  location?: string;
  dates: string;
  kind: "Experience" | "Extracurricular";
  href?: string;
  points: string[];
};

export const work: Role[] = [
  {
    org: "IG Wealth Management",
    role: "AI Developer",
    location: "Toronto, ON",
    dates: "May 2026 — Present",
    kind: "Experience",
    href: "https://www.linkedin.com/company/igwealthmanagement/",
    points: [
      "Built an agentic framework hosted on GCP using Pub/Sub, Dataflow, and BigQuery orchestrated via Gemini Enterprise Agents alongside deterministic custom models for regulatory-compliant automation reducing standardized mortgage review by 90% saving 400–500 hours monthly.",
      "Engineered production guardrails that reduced API costs by 60% via Vertex AI Vector Search semantic caching, automated PII masking using Cloud DLP, and deployed Vertex AI Pipelines for continuous hallucination tracking.",
      "Shipped POC-to-production agentic workflows under MLOps and agile frameworks; while managing technical governance documentation and strategic alignment presentations for the MIB division.",
    ],
  },
  {
    org: "Cohere Labs",
    role: "Research Member · Safety & Alignment",
    location: "Toronto, ON",
    dates: "Mar 2026 — Present",
    kind: "Experience",
    href: "https://www.linkedin.com/showcase/cohere-labs/",
    points: [
      "Engineered MAP, a black-box LLM attribution framework to classify 13 frontier model families and quantify prompt injection risks via behavioral feature extraction; presented statistical alignment findings at the Canadian Statistical Student Conference (May 2026).",
      "Developed automated PyTorch-based evaluation pipelines to stress-test black-box behaviors, establishing rigorous red-teaming methodologies and guardrail validation benchmarks for deployment-facing GenAI systems.",
      "Expanded guardrail robustness via multilingual safety benchmarking, evaluating reward model vulnerabilities, cross-cultural prompt injections, and toxic generation risks across low-resource languages for open-source community releases.",
    ],
  },
  {
    org: "Arkimetrix Analytics",
    role: "Software Engineer",
    location: "Hamilton, ON",
    dates: "Sept 2025 — Dec 2025",
    kind: "Experience",
    href: "https://www.linkedin.com/company/arkimetrix-analytics/",
    points: [
      "Reduced manual processing by 70%+ across 10K+ records by building document parsing pipelines via Azure Form Recognizer, Google Gemini API, and Docker with containerized CI/CD and schema enforcement.",
      "Cut end-to-end reporting latency by 90% (minutes → sub-30 seconds) by optimizing Flask/PostgreSQL APIs and ETL pipelines via CRON jobs for month-end batch processing.",
    ],
  },
  {
    org: "McMaster University",
    role: "Machine Learning Researcher",
    location: "Hamilton, ON",
    dates: "Apr 2025 — Aug 2025",
    kind: "Experience",
    href: "https://www.linkedin.com/school/mcmaster-university/",
    points: [
      "Achieved 4x faster pattern recognition on 100GB+ genomic datasets by engineering novel overlapping position algorithms to eliminate sequential bottlenecks in the MAXCOVER protein sequence pipeline.",
      "Eliminated reproducibility gaps by building automated testing infrastructure with GitHub Actions, PyTorch, and MLflow; benchmarked latency and throughput across experimental workflows for consistent model validation.",
    ],
  },
  {
    org: "Mac AI Society",
    role: "AI Research Project Member",
    dates: "Jun 2026 — Present",
    kind: "Extracurricular",
    points: [
      "Building a multimodal deep learning system to classify thoracic abnormalities and estimate severity from chest X-rays, generating saliency heatmaps (Grad-CAM) for explainable localization of model predictions.",
      "Developing a vision-language pipeline to produce radiology-style diagnostic reports from imaging features; advancing the project from research to a presented system at the Canadian Undergraduate Conference on AI (CUCAI) 2027.",
    ],
  },
  {
    org: "Greypoint Industries",
    role: "DND IDEaS Contract Bid Lead ($200,000)",
    dates: "May 2026",
    kind: "Extracurricular",
    points: [
      "Architected a Bayesian/Kalman multi-modal sensor fusion model for a DND IDEaS counter-drone proposal, fusing RF/EW telemetry, visual-inertial kinematics, and operational context through a soft-switching anti-spoof gate for resilient tracking in GPS/RF-contested environments.",
      "Sustained track continuity under individual sensor dropout via dynamic confidence reweighting across heterogeneous inputs; designed for edge deployment within SWaP constraints; submitted as a $200K competitive bid.",
    ],
  },
  {
    org: "DEFEND / 65square",
    role: "DevOps Engineer",
    dates: "Jan 2026 — Apr 2026",
    kind: "Extracurricular",
    points: [
      "Streamlined release automation by engineering CI/CD pipelines with GitLab CI/CD, building and pushing Docker container images to AWS.",
      "Standardized dependency management and dev/prod parity by migrating back-end services into isolated Docker containers.",
      "Restored platform reliability by leading Level 2 incident response, performing RCA on service failures, and deploying automated pipeline fixes.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "MAP",
    subtitle: "Model-Agnostic Probabilistic Attribution for Prompt Reversal",
    description:
      "A statistical framework that identifies which language model produced a given output, classifying source models across 13 model families through black-box probing and probabilistic attribution. 90%+ attribution accuracy on held-out data with uncertainty estimates, across 10K+ prompts. Presented at the Canadian Statistics Student Conference (Statistical Society of Canada).",
    tags: ["LLM Evaluation", "Python", "PyTorch", "NumPy/SciPy"],
    note: "Paper & code coming soon",
  },
  {
    name: "Bastion",
    subtitle: "Scam-Detecting AI Email Assistant · IBM AI Builders Challenge",
    description:
      "An injection-resilient LLM agent that safely triages untrusted inbound content: emails, invoices, and support tickets.",
    tags: ["LangGraph", "IBM Granite", "LoRA", "Garak"],
  },
  {
    name: "KuiperHunter",
    subtitle: "3D U-Net for Object Detection in Deep Space",
    description:
      "A custom 3D U-Net for detecting faint moving objects (TNOs) in deep-space imagery, below standard noise thresholds.",
    tags: ["Deep Learning", "Computer Vision", "Python", "PyTorch"],
    href: "https://github.com/rohit661x/KuiperHunter",
  },
  {
    name: "Neuroplasticity",
    subtitle: "Neuroplasticity-Inspired Deep Learning Optimizer",
    description:
      "A meta-learning optimizer with dynamic sparsity regularization: 52% model sparsity at 98% MNIST accuracy.",
    tags: ["Meta-Learning", "Model Compression", "PyTorch", "TensorFlow"],
    href: "https://github.com/rohit661x/neuroplasticity-metalearning",
  },
];

export const stack: { label: string; items: string }[] = [
  { label: "Languages", items: "Python, C, C++, SQL, R, Bash, TypeScript" },
  { label: "AI & ML", items: "PyTorch, TensorFlow, scikit-learn, XGBoost, Hugging Face, RAG" },
  { label: "Data & Infra", items: "Docker, Kubernetes, Kafka, Terraform, MLflow, GitHub Actions" },
  { label: "Cloud & DB", items: "GCP, AWS, Azure, PostgreSQL, MongoDB, Redis" },
];
