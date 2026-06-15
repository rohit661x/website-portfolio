import ClubRow, { type Club } from "./ClubRow";

const clubs: Club[] = [
  {
    org: "Mac AI Society",
    title: "AI Research Project Member",
    period: "Jun 2026 — Present",
    bullets: [
      "Describe your work on the AI research project at Mac AI Society.",
      "Highlight a model, result, or contribution.",
      "Add another responsibility or focus area.",
      "Add a final accomplishment for this role.",
    ],
  },
  {
    org: "Greypoint Industries",
    title: "DND IDEaS Contract Bid Lead ($200,000)",
    period: "May 2026",
    bullets: [
      "Describe your role leading the DND IDEaS contract bid.",
      "Highlight the scope, team, or outcome of the $200,000 bid.",
      "Add another responsibility or focus area.",
      "Add a final accomplishment for this role.",
    ],
  },
  {
    org: "DEFEND / 65square",
    title: "DevOps Engineer",
    period: "Jan 2026 — Apr 2026",
    bullets: [
      "Describe your DevOps work at DEFEND / 65square.",
      "Highlight the infrastructure, tooling, or pipelines you built.",
      "Add another responsibility or focus area.",
      "Add a final accomplishment for this role.",
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
