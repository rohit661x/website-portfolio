const interests: { name: string; icon: string; detail?: string }[] = [
  { name: "Gym", icon: "fitness_center" },
  { name: "Basketball", icon: "sports_basketball" },
  {
    name: "Quant Finance",
    icon: "trending_up",
    detail: "Ranked 34th in Citadel's Australian Trading Invitational",
  },
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
            className="group flex items-start justify-between p-md rounded-sm hover:bg-surface-container/50 transition-all duration-300 cursor-default"
          >
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-primary group-hover:translate-x-1 transition-transform">
                {interest.name}
              </span>
              {interest.detail && (
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                  <span className="min-h-0 overflow-hidden font-meta-technical text-meta-technical text-on-surface-variant pt-xs">
                    {interest.detail}
                  </span>
                </div>
              )}
            </div>
            <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-[color:var(--accent)] transition-colors">
              {interest.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
