const interests = [
  "Gym",
  "Basketball",
  "Quant Finance",
  "Physics",
  "Chess",
  "Cars",
];

export default function Interests() {
  return (
    <section
      className="animate-fade-in-up"
      style={{ animationDelay: "600ms" }}
    >
      <div className="flex justify-between items-end border-b-architectural pb-sm mb-md">
        <h2 className="font-h3 text-h3 text-primary">Interests</h2>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          06 // Interests
        </span>
      </div>
      <div className="flex flex-col gap-sm">
        {interests.map((interest, i) => (
          <div
            key={interest}
            className={`group flex flex-col pb-xs ${
              i < interests.length - 1 ? "border-b border-outline-variant" : ""
            }`}
          >
            <span className="font-body-md text-body-md font-bold text-primary group-hover:text-[color:var(--accent)] transition-colors">
              {interest}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
