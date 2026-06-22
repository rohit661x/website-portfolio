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
      "Describe your research focus or contribution at Cohere Labs.",
      "Highlight a result, paper, or method you worked on.",
    ],
  },
  {
    org: "Arkimetrix Analytics",
    title: "Software Engineer",
    location: "Hamilton, ON",
    period: "Sept 2025 — Dec 2025",
    linkedin: "https://www.linkedin.com/company/arkimetrix-analytics/",
    bullets: [
      "Describe what you built at Arkimetrix Analytics.",
      "Highlight the stack, scale, or impact of your work.",
    ],
  },
  {
    org: "McMaster University",
    title: "Machine Learning Researcher",
    location: "Hamilton, ON",
    period: "Apr 2025 — Aug 2025",
    linkedin: "https://www.linkedin.com/school/mcmaster-university/",
    bullets: [
      "Describe your ML research at McMaster University.",
      "Highlight a model, dataset, or finding you produced.",
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
