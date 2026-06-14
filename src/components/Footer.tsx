const links = [
  { label: "GitHub", href: "https://github.com/rohit661x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/RohitSuryadevara" },
  { label: "Email", href: "mailto:rohit.suryadevara.661@gmail.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant mt-auto bg-background" id="contact">
      <div className="max-w-container-max mx-auto px-lg md:px-xl py-xl flex flex-col md:flex-row justify-between items-center">
        <div className="font-label-caps text-label-caps text-primary mb-md md:mb-0">
          © 2026 Rohit Suryadevara
        </div>
        <div className="flex gap-lg">
          {links.map((link) => (
            <a
              key={link.label}
              className="magnetic-link font-body-md text-body-md text-on-surface-variant hover:text-primary underline"
              href={link.href}
              target={
                link.href.startsWith("http") || link.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.href.startsWith("http") || link.href.endsWith(".pdf")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
