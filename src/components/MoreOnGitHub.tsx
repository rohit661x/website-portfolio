const GITHUB = "https://github.com/rohit661x";

export default function MoreOnGitHub() {
  return (
    <a
      href={GITHUB}
      target="_blank"
      rel="noopener noreferrer"
      className="tile-lift group border-architectural px-lg py-sm flex items-center justify-between bg-surface-container-lowest"
    >
      <span className="flex items-baseline gap-lg flex-wrap">
        <span className="font-body-md text-body-md font-bold text-primary group-hover:text-[color:var(--accent)] transition-colors">
          More on GitHub
        </span>
        <span className="font-meta-technical text-meta-technical text-on-surface-variant">
          Side projects, experiments &amp; source
        </span>
      </span>
      <span className="material-symbols-outlined text-[20px] text-outline group-hover:text-[color:var(--accent)] transition-colors">
        open_in_new
      </span>
    </a>
  );
}
