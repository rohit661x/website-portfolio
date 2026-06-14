
2# User Info — Friend's Portfolio Content

Foundational Changes on user info md and display changes to the portolfio website - remove the Awards section and put Interests in its place, using the original Awards formatting. Then, create a new section called 'Clubs, Programs & Research' and place it in the original Interests slot, keeping the styling and display style that was previously used there. Lastly elborate on this part: - **Social-share image** (1200×630, optional): `<attach / drop in /public/og-image.jpg>`
- **Favicon** (optional): `<attach / drop in /public/icon.svg>`
---

## 1. Identity / Hero

- **Full name** (shown huge at top): `<Rohit Suryadevara>`
- **Role / title** (browser tab + SEO): `<Machine Learning Engineer>`
- **Tagline prefix** (the lead-in before the rotating words): `<e.g. I build>`
- **Rotating phrases** (3–6, cycle in the hero):
  - `<machine learning models>`
  - `<AI systems>`
  - `<data pipelines>`
  - `<data-driven insights>`
  - `<software that makes a difference>`
- **Bio line** (one sentence): `<Mathematics student at McMaster Univerity & Artifical Intelligence developer at Investors Group>`
- **GitHub URL**: `<https://github.com/rsuryadevara>`
- **LinkedIn URL**: `<https://www.linkedin.com/in/RohitSuryadevara>`

---

## 2. Experience

For each role: Organization · Title · Location · Dates. Most recent first.

| Organization | Title | Location | Dates |
|--------------|-------|----------|-------|
| `<IG Wealth Management>` | `<AI Developer>` | `<Burlington, Ontario>` | `<May 2026 — Present>` |
| `<Cohere Labs (Safety & Alignment)>` | `<Research Member>` | `<Toronto, Ontario>` | `<Mar 2026 — Present>` |
| `< Arkimetrix Analytics >` | `<Software Engineer>` | `<Hamilton, Ontario>` | `<Sept 2025 — Dec 2025>` |
| `< McMaster Univeristy >` | `<Machine Learning Researcher>` | `<Hamilton, Ontario>` | `<Apr 2025 — Aug 2025>` |

- **"Affilitated Organizations:" one-liner** : `<e.g. : AI2; Grey Swan; EleutherAI; >`

---

## 3. Clubs, Programs & Research

For each role: Organization · Title · Dates. Most recent first.

| Organization | Title | Dates |
|--------------|-------|-------|
| `<McMaster Artificial Intelligence Society>` | `<AI Research Project Member>` | `<Jun 2026 — Present>` |
| `<Greypoint Industries>` | `<DND IDEaS Contract Bid Lead>` | `<May 2026>` |
| `<DEFEND / 65square>` | `<DevOps Engineer>` | `<Jan 2026 — Apr 2026>` |

---

## 4. Projects

### Featured project (the big highlighted card)
- **Title**: `<MAP — Model-Agnostic Probabilistic Attribution for Prompt Reversal>`
- **Description** (1–2 sentences): `<A statistical framework that identifies which language model produced a given output, classifying source models across 13 model families through black-box probing and probabilistic attribution. Presented at the Canadian Statistics Student Conference (Statistical Society of Canada)>`
- **Highlights** (3 bullets):
  - `<Developed a probabilistic attribution method to identify language model sources using black-box probing and statistical classification across 13 model families>`
  - `<Achieved 90%+ attribution accuracy on held-out data, outperforming baseline heuristic methods and providing uncertain output for ambiguous cases>`
  - `<Generated attribution scores for 10K+ prompts across GPT, Claude, Llama, Gemini, Mistral, and other families, supporting prompt-injection analysis and model fingerprinting research>`
- **Tech tags**: `<LLM evaluation, Python, PyTorch, NumPy/SciPy>`
- **Live URL**: `<not yet>`
- **arXiv / poster link**: `<not yet>`
- **Repo link(s)**:
  - `<Repo label?>` → `<not yet>`


### Other projects (repeat the block per project; add/remove as needed)
- **Title**: `<IBM AI Builders Challenge: Bastion - Scam Detecting AI Email Assistant>`
  - **Description**: `<Bastion is an  LLM security project: an injection-resilient agent that triages untrusted inbound content (emails, invoices, support tickets) while reducing the risk of prompt injection, tool misuse, data exfiltration, and unsafe instruction-following>`
  - **Tags**: `<LangGraph, IBM Granite, LoRA, Garak>`
  - **Link** (optional): `<https://...>`

- **Title**: `<KuiperHunter — 3D U-Net for Object Detection in Deep Space>`
  - **Description**: `<Designed and trained a custom 3D U-Net in PyTorch for faint moving-object detection in astronomical images, targeting TNO's below standard noise thresholds. Engineered a synthetic source-injection pipeline generating training data with controlled signal-to-noise distributions for added robustisticity>`
  - **Tags**: `<Deep Learning, Computer Vision, Python, Pytorch>`
  - **Link** (optional): `<https://...>`

- **Title**: `<Neuroplasticity-Inspired Deep Learning Optimizer>`
  - **Description**: `< Designed a meta-learning experimentation framework to evaluate learning rate schedules and  ML algorithm development.Achieved 52% model sparsity while maintaining 98% accuracy on MNIST by implementing a custom deep learning optimizer with dynamic sparsity regularization for neural network compression.>`
  - **Tags**: `<Meta-Learning, Hyperparameter Optimization, Model Compression, Pytorch & TensorFlow>`
  - **Link** (optional): `<https://...>`
---

## 5. Skills

Grouped. Add/remove groups freely.

- **`<Languages>`**: `<Python, TypeScript, ...>`
- **`<AI & ML>`**: `<...>`
- **`<Backend>`**: `<...>`
- **`<Data & Infra>`**: `<...>`
- **`<Frontend & Testing>`**: `<...>`

---

## 6. Interests

Short list (yours was: Gym, Soccer, Basketball, Running, Photography, Food).

- `<Gym>`
- `<Basketball>`
- `<Quant Finance>`
- `<Physics>`
- `<Chess>`
- `<Cars>`

---

## 8. Contact / Footer

- **Email**: `<rohit.suryadevara.661@gmail.com>`
- **GitHub URL**: `<https://github.com/rohit661x>`
- **LinkedIn URL**: `<https://www.linkedin.com/in/RohitSuryadevara>`
- **Copyright name** (footer, e.g. "© 2026 Jane Doe"): `<Rohit Suryadevara>`

---

## 9. GitHub Contribution Graph

- **GitHub username**: `<rohit661x>`
- (A `GITHUB_TOKEN` is needed at deploy time to fetch the graph — I'll walk you through generating one. Nothing to fill here.)

---

## 10. Assets (send the files separately whenever ready)

- **Résumé PDF** — file: `<not yet>`
  - This is the file the "Resume" button downloads. Drop the final PDF at `/public/resume.pdf`
    (it replaces the placeholder, which is currently Momin's resume).

- **Social-share image** (`/public/og-image.jpg`, 1200×630 px) — *what it is:* the preview
  thumbnail that shows up when the site link is shared anywhere (LinkedIn, iMessage, Slack, X,
  Discord). It is NOT shown on the site itself — only in link previews. Right now it's still
  Momin's Tokyo photo, so sharing the link would show his image.
  - Options: (a) a branded card reading "Rohit Suryadevara — Machine Learning Engineer" on a
    dark background that matches the site, (b) a clean headshot, or (c) skip it (the link still
    works, it just shows a plain/blank preview).
  - I can generate option (a) for you. Final file goes at `/public/og-image.jpg`.

- **Favicon** (`/public/icon.svg`) — *what it is:* the tiny icon in the browser tab, bookmarks,
  and phone home-screen shortcuts. Currently Momin's mark.
  - Simplest is a monogram — e.g. a bold "RS" on the site's accent color. I can generate the
    SVG. Final file goes at `/public/icon.svg`.

---

## 11. Look & Feel

- **Keep current design** (dark/light toggle, purple→violet accent, current fonts)? `<yes / no>`
- If changing — **accent color(s)**: `<hex or description>`
- If changing — **fonts**: `<font names>`

---

## Shortcut

If filling the above is tedious, just paste/attach the friend's **résumé**, **LinkedIn URL**,
and **GitHub username** here, and I'll draft most of this for you to correct.
