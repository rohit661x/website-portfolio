const roles = [
  {
    org: "IG Wealth Management",
    title: "AI Developer",
    location: "Burlington, ON",
    period: "May 2026 — Present",
  },
  {
    org: "Cohere Labs (Safety & Alignment)",
    title: "Research Member",
    location: "Toronto, ON",
    period: "Mar 2026 — Present",
  },
  {
    org: "Arkimetrix Analytics",
    title: "Software Engineer",
    location: "Hamilton, ON",
    period: "Sept 2025 — Dec 2025",
  },
  {
    org: "McMaster University",
    title: "Machine Learning Researcher",
    location: "Hamilton, ON",
    period: "Apr 2025 — Aug 2025",
  },
];

export default function Experience() {
  return (
    <section
      className="animate-fade-in-up"
      id="experience"
      style={{ animationDelay: "150ms" }}
    >
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-[28px] font-medium leading-tight text-primary">Experience</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          01 // Work
        </span>
      </div>
      <div className="flex flex-col border-architectural bg-surface-container-lowest">
        {roles.map((role) => (
          <div
            key={`${role.org}-${role.title}`}
            className="group flex flex-col md:flex-row md:items-center justify-between p-md border-b border-outline-variant border-l-2 border-l-transparent hover:border-l-[color:var(--accent)] hover:bg-surface-container transition-all duration-200 cursor-default"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-xs md:gap-md">
              <span className="text-sm font-bold text-primary group-hover:text-[color:var(--accent)] group-hover:translate-x-1 transition-all">
                {role.org}
              </span>
              <span className="text-sm text-on-surface-variant">{role.title}</span>
            </div>
            <div className="font-meta-technical text-meta-technical text-outline mt-sm md:mt-0 md:text-right shrink-0">
              {role.location} • {role.period}
            </div>
          </div>
        ))}
        <div className="p-md bg-surface-container-low flex justify-between items-center text-on-surface-variant">
          <span className="font-meta-technical text-meta-technical">
            Affiliated Organizations: AI2; Grey Swan; EleutherAI
          </span>
          <span className="material-symbols-outlined text-[16px]">groups</span>
        </div>
      </div>
    </section>
  );
}
