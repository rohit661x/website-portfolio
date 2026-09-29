/** Decodes an address stored as base64(reversed email). */
export function decodeEmail(encoded: string): string {
  return atob(encoded).split("").reverse().join("");
}

/** Fills in every [data-email] link once the page is running in a real browser. */
export function initEmailLinks() {
  document.querySelectorAll<HTMLAnchorElement>("a[data-email]").forEach((a) => {
    const email = decodeEmail(a.dataset.email!);
    a.href = `mailto:${email}`;
    const label = a.querySelector("[data-email-text]");
    if (label) label.textContent = email;
    a.removeAttribute("aria-disabled");
  });
}
