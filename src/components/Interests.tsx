const interests = [
  { name: "Gym", icon: "fitness_center" },
  { name: "Basketball", icon: "sports_basketball" },
  { name: "Quant Finance", icon: "trending_up" },
  { name: "Video Games", icon: "sports_esports" },
  { name: "Chess", icon: "strategy" },
  { name: "Cars", icon: "directions_car" },
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
      <div className="flex flex-col">
        {interests.map((interest) => (
          <div
            key={interest.name}
            className="group flex items-center justify-between p-md rounded-sm hover:bg-surface-container/50 transition-all duration-300 cursor-default"
          >
            <span className="font-body-md text-body-md text-primary group-hover:translate-x-1 transition-transform">
              {interest.name}
            </span>
            <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-[color:var(--accent)] transition-colors">
              {interest.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
