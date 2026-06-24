import ClubRow, { type Club } from "./ClubRow";

const clubs: Club[] = [
  {
    org: "Mac AI Society",
    title: "AI Research Project Member",
    period: "Jun 2026 — Present",
    bullets: [
      "Building a multimodal deep learning system to classify thoracic abnormalities and estimate severity from chest X-rays, generating saliency heatmaps (Grad-CAM) for explainable localization of model predictions.",
      "Developing a vision-language pipeline to produce radiology-style diagnostic reports from imaging features; advancing the project from research to a presented system at the Canadian Undergraduate Conference on AI (CUCAI) 2027.",
    ],
  },
  {
    org: "Greypoint Industries",
    title: "DND IDEaS Contract Bid Lead ($200,000)",
    period: "May 2026",
    bullets: [
      "Architected a Bayesian/Kalman multi-modal sensor fusion model for a DND IDEaS counter-drone proposal, fusing RF/EW telemetry, visual-inertial kinematics, and operational context through a soft-switching anti-spoof gate for resilient tracking in GPS/RF-contested environments.",
      "Sustained track continuity under individual sensor dropout via dynamic confidence reweighting across heterogeneous inputs; designed for edge deployment within SWaP constraints; submitted as a $200K competitive bid.",
    ],
  },
  {
    org: "DEFEND / 65square",
    title: "DevOps Engineer",
    period: "Jan 2026 — Apr 2026",
    bullets: [
      "Streamlined release automation by engineering CI/CD pipelines with GitLab CI/CD, building and pushing Docker container images to AWS.",
      "Standardized dependency management and dev/prod parity by migrating back-end services into isolated Docker containers.",
      "Restored platform reliability by leading Level 2 incident response, performing RCA on service failures, and deploying automated pipeline fixes.",
    ],
  },
];

export default function Clubs() {
  return (
    <section
      className="animate-fade-in-up"
      style={{ animationDelay: "450ms" }}
    >
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-h3 text-primary">Extracurriculars</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          05 // Extracurriculars
        </span>
      </div>
      <div className="flex flex-col">
        {clubs.map((club) => (
          <ClubRow key={club.org} club={club} />
        ))}
      </div>
    </section>
  );
}
