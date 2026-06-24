import ExperienceRow, { type Role } from "./ExperienceRow";

const roles: Role[] = [
  {
    org: "IG Wealth Management",
    title: "AI Developer",
    location: "Toronto, ON",
    period: "May 2026 — Present",
    linkedin: "https://www.linkedin.com/company/igwealthmanagement/",
    bullets: [
      "Built an agentic framework hosted on GCP using Pub/Sub, Dataflow, and BigQuery orchestrated via Gemini Enterprise Agents alongside deterministic custom models for regulatory-compliant automation reducing standardized mortgage review by 90% saving 400–500 hours monthly.",
      "Engineered production guardrails that reduced API costs by 60% via Vertex AI Vector Search semantic caching, automated PII masking using Cloud DLP, and deployed Vertex AI Pipelines for continuous hallucination tracking.",
      "Shipped POC-to-production agentic workflows under MLOps and agile frameworks; while managing technical governance documentation and strategic alignment presentations for the MIB division.",
    ],
  },
  {
    org: "Cohere Labs (Safety & Alignment)",
    title: "Research Member",
    location: "Toronto, ON",
    period: "Mar 2026 — Present",
    linkedin: "https://www.linkedin.com/showcase/cohere-labs/",
    bullets: [
      "Engineered MAP, a black-box LLM attribution framework to classify 13 frontier model families and quantify prompt injection risks via behavioral feature extraction; presented statistical alignment findings at the Canadian Statistical Student Conference (May 2026).",
      "Developed automated PyTorch-based evaluation pipelines to stress-test black-box behaviors, establishing rigorous red-teaming methodologies and guardrail validation benchmarks for deployment-facing GenAI systems.",
      "Expanded guardrail robustness via multilingual safety benchmarking, evaluating reward model vulnerabilities, cross-cultural prompt injections, and toxic generation risks across low-resource languages for open-source community releases.",
    ],
  },
  {
    org: "Arkimetrix Analytics",
    title: "Software Engineer",
    location: "Hamilton, ON",
    period: "Sept 2025 — Dec 2025",
    linkedin: "https://www.linkedin.com/company/arkimetrix-analytics/",
    bullets: [
      "Reduced manual processing by 70%+ across 10K+ records by building document parsing pipelines via Azure Form Recognizer, Google Gemini API, and Docker with containerized CI/CD and schema enforcement.",
      "Cut end-to-end reporting latency by 90% (minutes → sub-30 seconds) by optimizing Flask/PostgreSQL APIs and ETL pipelines via CRON jobs for month-end batch processing.",
    ],
  },
  {
    org: "McMaster University",
    title: "Machine Learning Researcher",
    location: "Hamilton, ON",
    period: "Apr 2025 — Aug 2025",
    linkedin: "https://www.linkedin.com/school/mcmaster-university/",
    bullets: [
      "Achieved 4x faster pattern recognition on 100GB+ genomic datasets by engineering novel overlapping position algorithms to eliminate sequential bottlenecks in the MAXCOVER protein sequence pipeline.",
      "Eliminated reproducibility gaps by building automated testing infrastructure with GitHub Actions, PyTorch, and MLflow; benchmarked latency and throughput across experimental workflows for consistent model validation.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="animate-fade-in-up md:h-full md:flex md:flex-col"
      id="experience"
      style={{ animationDelay: "150ms" }}
    >
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-h3 text-primary">Experience</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          01 // Work
        </span>
      </div>
      <div className="flex flex-col md:flex-1 border-architectural bg-surface-container-lowest">
        {roles.map((role) => (
          <ExperienceRow key={`${role.org}-${role.title}`} role={role} />
        ))}
      </div>
    </section>
  );
}
