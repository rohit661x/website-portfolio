// All site content lives here. Components only render it.

export const profile = {
  name: "Rohit Suryadevara",
  titles: ["ML Engineer", "AI Developer", "Data Engineer", "Mathematics @ McMaster"],
  description:
    "Rohit Suryadevara is a Mathematics & Statistics student at McMaster University researching LLM privacy at Carnegie Mellon and model evaluation with Cohere Labs, and building production machine learning systems.",
  home: [
    "I think in systems, dig for root causes, and build for change.",
    "Hard problems are the interesting ones.",
    "Fast is good, correct is better, and trusted is the whole point.",
    "I build things meant to outlast the reason I started them.",
  ],
  bio: "I'm a Mathematics & Statistics student at McMaster University working where statistics meets machine learning. Right now I'm researching LLM privacy at Carnegie Mellon and model evaluation with Cohere Labs; before that I took AI systems from prototype to production at IG Wealth Management. Away from the terminal I am passionate about quant finance (34th in Citadel's Australian Trading Invitational), chess, basketball, the gym, cars and video games.",
};

export const links = {
  // Reversed then base64-encoded so the address never appears in plain text
  // (source or HTML) for scrapers; decoded in the browser by scripts/email.ts
  emailEncoded: "bW9jLmxpYW1nQDE2Ni5hcmF2ZWRheXJ1cy50aWhvcg==",
  github: "https://github.com/rohit661x",
  linkedin: "https://www.linkedin.com/in/RohitSuryadevara",
  resume: "/resume.pdf",
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
    org: "Carnegie Mellon University",
    role: "Research Contributor",
    dates: "Aug 2026 — Present",
    kind: "Experience",
    points: [
      "Conducted LLM privacy research under Prof. Hana Habib, translating research hypotheses into reproducible PyTorch pipelines and implemented DP-SGD fine-tuning for 1–8B parameter models with LoRA and Opacus.",
      "Designed and ran controlled experiments across 6 datasets and multiple privacy budgets, evaluating DP vs. non-DP models on training-data extraction and accuracy with confidence intervals.",
    ],
  },
  {
    org: "IG Wealth Management",
    role: "Artificial Intelligence Engineer Intern",
    location: "Toronto, ON",
    dates: "May 2026 — Aug 2026",
    kind: "Experience",
    href: "https://www.linkedin.com/company/igwealthmanagement/",
    points: [
      "Built a mortgage risk-scoring system from POC to production: deterministic weighted model with external API signals, deployed as a React/Python service on GCP (Pub/Sub, Dataflow, BigQuery, Gemini Enterprise Agents), cutting review time 90% and saving 400–500 underwriter hours/month.",
      "Developed a TypeScript MCP connector exposing RocketReach tools to Claude, enabling AI agents to qualify 540+ contacts per mandate and automate an 8-hour manual process.",
    ],
  },
  {
    org: "Greypoint Industries (YC S26)",
    role: "Machine Learning Engineer (Contract)",
    dates: "Apr 2026 — May 2026",
    kind: "Experience",
    points: [
      "Built the ML tracking system for a $200K Canadian defence proposal, helping drones maintain reliable target tracking when sensors were jammed, spoofed, or unavailable; combined multiple sensor inputs using Kalman filtering and adaptive weighting, reducing tracking error 45%.",
      "Built a Python simulation and testing framework that recreated jamming, spoofing, and sensor failures to measure system reliability before deployment, rejecting 99% of spoofed measurements and automatically flagging accuracy and latency regressions.",
    ],
  },
  {
    org: "Cohere Labs Open Science Community",
    role: "Research Member · Evaluation",
    location: "Toronto, ON",
    dates: "Mar 2026 — Present",
    kind: "Experience",
    href: "https://www.linkedin.com/showcase/cohere-labs/",
    points: [
      "Engineered MAP, a black-box LLM attribution framework classifying 13 frontier model families at 82% accuracy using statistical anomaly detection and feature engineering on model behavior; presented at the Canadian Statistical Student Conference (2026).",
      "Built a multi-provider LLM evaluation pipeline in PyTorch with SQLite provenance tracking, 225-feature extraction, and GitHub Actions CI regression tests benchmarking prompt injection and reward model vulnerabilities.",
    ],
  },
  {
    org: "Arkimetrix Analytics",
    role: "Data Engineering Intern",
    location: "Hamilton, ON",
    dates: "Sept 2025 — Dec 2025",
    kind: "Experience",
    href: "https://www.linkedin.com/company/arkimetrix-analytics/",
    points: [
      "Architected a containerized document parsing engine via Azure Form Recognizer and Google Gemini API, extracting 10K+ unstructured records and reducing manual processing by 70%+.",
      "Orchestrated terabyte-scale backend infrastructure with Apache Airflow, PostgreSQL, and Flask, optimizing database schemas to drive faster end-to-end month-end reporting cycles.",
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
    org: "Google Developer Groups McMaster",
    role: "Open Source Developer",
    dates: "Sept 2026 — Present",
    kind: "Extracurricular",
    points: [
      "Developing Sentinel, an open-source multi-agent LLM security platform using LangGraph, MCP, and RAG to detect software supply-chain, dependency, and CI/CD vulnerabilities in GitHub pull requests.",
      "Building an LLM evaluation benchmark of adversarial pull requests (malicious install scripts, unpinned GitHub Actions, secret exposure) to measure agent precision, recall, and false-positive rate.",
    ],
  },
  {
    org: "DeGroote Finance & Investment Council",
    role: "Quantitative Strategies",
    dates: "Sept 2026 — Present",
    kind: "Extracurricular",
    points: [
      "Developed and backtested algorithmic trading strategies in Python & C# for a ~$180K long-only equities fund; built a multi-asset momentum strategy (RSI, EMA, MACD), ranking top 10 in QuantConnect's open-source competition.",
      "Built a statistical arbitrage pairs-trading strategy using cointegration and ADF tests to identify stationary spreads for mean reversion; analyzed risk-adjusted performance using Sharpe ratio, max drawdown, alpha, and beta.",
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
      "A statistical framework that identifies which language model produced a given output, classifying source models across 13 model families through black-box probing and probabilistic attribution. 82% attribution accuracy on held-out data with uncertainty estimates, across 10K+ prompts. Presented at the Canadian Statistics Student Conference (Statistical Society of Canada).",
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
