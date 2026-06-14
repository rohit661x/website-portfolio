const clubs = [
  {
    org: "McMaster Artificial Intelligence Society",
    title: "AI Research Project Member",
    period: "Jun 2026 — Present",
  },
  {
    org: "Greypoint Industries",
    title: "DND IDEaS Contract Bid Lead",
    period: "May 2026",
  },
  {
    org: "DEFEND / 65square",
    title: "DevOps Engineer",
    period: "Jan 2026 — Apr 2026",
  },
];

export default function Clubs() {
  return (
    <section
      className="animate-fade-in-up md:h-full md:flex md:flex-col"
      style={{ animationDelay: "450ms" }}
    >
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-h3 text-primary">Clubs, Programs &amp; Research</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          05 // Research
        </span>
      </div>
      <div className="flex flex-col md:flex-1 border-architectural bg-surface-container-lowest shadow-sm">
        {clubs.map((club, i) => (
          <div
            key={club.org}
            className={`group flex flex-col justify-center gap-xs p-md md:flex-1 hover:bg-surface-container transition-all duration-300 cursor-default ${
              i < clubs.length - 1 ? "border-b border-outline-variant" : ""
            }`}
          >
            <span className="font-body-md text-body-md font-bold text-primary group-hover:translate-x-1 transition-transform">
              {club.org}
            </span>
            <span className="font-meta-technical text-meta-technical text-on-surface-variant">
              {club.title} • {club.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
