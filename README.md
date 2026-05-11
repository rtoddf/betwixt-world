# Betwixt Design System

> **Tagline:** You've got neighbors. Now meet ours.

Betwixt is a neighborhood where feelings, conditions, and human‑made situations have kids who personify them. Characters are inclusive, dignified, and defined by who they are — not what they have. The brand voice is **approachable and wise**, speaking to kids and adults simultaneously without talking down to either. The Gaiman/_Coraline_ register is the touchstone for character copy; clear and direct everywhere else.

The world should **feel handmade** — like a record store crossed with a children's book crossed with the art on a good therapist's wall. Nothing too perfect, nothing too corporate, nothing too babyish.

---

## Sources

This system was built from a written brand brief plus three uploaded assets:

- `uploads/ArchitectsDaughter-Regular.ttf` — display wordmark font
- `uploads/Quicksand-VariableFont_wght.ttf` — body copy font
- `uploads/logo.svg` — the barefoot mark (paths only, no color)

No Figma file, codebase, or product screens were provided — Betwixt is pre‑product. The UI kit here is therefore a **marketing site recreation built from the brand brief**, not an import. When a real Figma or codebase shows up, replace it.

---

## Index

```
README.md                  ← you are here
SKILL.md                   ← Agent‑Skills entrypoint (for Claude Code use)
colors_and_type.css        ← all foundation tokens (color, type, spacing, motion)
fonts/
  ArchitectsDaughter-Regular.ttf
  Quicksand-VariableFont_wght.ttf
assets/
  logo-raw.svg                 (source, unstyled)
  logo-icon-primary.svg        (teal disc, amber ring, cream feet — on cream)
  logo-icon-mono-teal.svg      (single-color teal, on cream)
  logo-icon-on-navy.svg        (cream + amber, on navy/teal)
  logo-icon-cream.svg          (cream-only outline, for very dark)
preview/                   ← Design System tab cards
  type-*.html
  color-*.html
  spacing-*.html
  brand-*.html
  components-*.html
ui_kits/
  website/                 ← marketing site recreation
    README.md
    index.html             (click-thru landing → /character, /about, /visit)
    styles.css             (kit-specific styles on top of tokens)
    Header.jsx · Footer.jsx
    Hero.jsx · NeighborhoodGrid.jsx · Callout.jsx
    CharacterProfile.jsx · About.jsx · Visit.jsx
```

### UI kits available

| Kit         | Path               | What's in it                                                          |
| ----------- | ------------------ | --------------------------------------------------------------------- |
| **Website** | `ui_kits/website/` | Marketing site: landing → character profile → about → visit (sign-up) |

> No mobile app, dashboard, or product surface was provided — only brand brief + logo + fonts. The website kit is the single product surface implied by the tagline ("come meet our neighbors"). If real product surfaces show up later, add new kits alongside `website/`.

---

## CONTENT FUNDAMENTALS

How Betwixt writes.

### Voice register

Two registers, used in different places, never mixed within one block:

1. **Storybook** — for character bios, taglines, world descriptions, hero copy. Neil Gaiman / _Coraline_. Specific, slightly mythic, never cute‑for‑cute's‑sake. Trusts the reader.
   - ✅ _"Worry's pockets are full of small important things. Acorns, mostly. A bottle cap. The phone number of someone she loves."_
   - ✅ _"You've got neighbors. Now meet ours."_
   - ❌ _"Meet our adorable cast of fun feelings friends! 🌈"_

2. **Clear and direct** — for navigation, buttons, settings, errors, legal. Plain English, no winking. Architectural; gets out of the way.
   - ✅ _"Sign in"_, _"Find your character"_, _"This page is still being painted."_
   - ❌ _"Embark on your journey!"_, _"Oopsie! 😅"_

### Person & address

- **Second person ("you")** is the default — Betwixt is a place that addresses the visitor as a guest. _"You've got neighbors."_
- **First‑person plural ("we, us, our")** for institutional voice (about page, careers). Use sparingly.
- **First‑person singular ("I")** belongs only to characters speaking in their own bios. Never the brand itself.

### Casing

- **Sentence case** everywhere — headings, buttons, nav. Title Case feels corporate.
- **ALL CAPS** only for eyebrows, tiny labels (≤14px), and the occasional sign‑in‑a‑shop‑window display moment. Always with `letter-spacing: 0.18em`.
- Character names are capitalized like proper nouns: **Worry**, **Big Feeling**, **The Quiet One**.

### Punctuation

- **Em‑dashes** are used — like this — for asides. Real em‑dashes (`—`), not double hyphens.
- **Ampersands** are fine in display ("kids & grown‑ups") but not in body copy.
- **Oxford commas**, always.
- **One space after a period**, always.
- **Exclamation points** are rare. One per page is plenty. Two is a circus.
- **Ellipses** only for genuine trailing thoughts; never for "drama…"

### Length

- Headlines: **3–8 words**. Read aloud, take a breath, that's the limit.
- Sub‑heads: **one full sentence**, ending with a period.
- Body: **short paragraphs** (2–4 sentences). Lists are welcome.
- Buttons: **1–3 words**, verb‑first. _"See the neighborhood"_, _"Meet Worry"_.

### What to avoid

- **No emoji.** Not in copy, not in chips, not in alerts. The handmade marks (icon, type wobble) are the warmth.
- **No therapy‑speak as marketing.** ("Hold space for big feelings.") Characters can say these things; the brand cannot.
- **No "journey,"** "embark," "unlock," "magical," "delightful," "powered by," or "reimagined."
- **No diagnostic language for character identity.** Characters _are_ feelings/situations — they don't _have_ them. Worry isn't a kid with anxiety; Worry is Worry.
- **Dignity test:** if you wouldn't say it about a real neighbor's kid, don't say it about a character.

---

## VISUAL FOUNDATIONS

### Palette — six colors, strict roles

| Token            | Hex       | Role                                                                        |
| ---------------- | --------- | --------------------------------------------------------------------------- |
| **Teal**         | `#2A7F7F` | Anchor. Large headings on cream. Borders. Key UI surfaces. Large text only. |
| **Deep navy**    | `#1A4A4A` | The workhorse. _All_ body copy on cream. Drop shadows. The ink.             |
| **Cream**        | `#F5EDD6` | Background, always. Never pure white — too cold for this world.             |
| **Amber**        | `#F0A500` | Decoration only. Rings, icons, dividers, background shapes. **Never text.** |
| **Burnt orange** | `#D4622A` | Decoration. Same rules as amber. Good for eyebrows on cream.                |
| **Coral**        | `#E8442A` | Display moments only. Large text on cream. Never on teal or navy.           |

The AA‑safe combinations are **navy on cream (AAA, all sizes)** and **cream on navy (AAA, all sizes)**. Teal on cream and cream on teal both pass for **large text only (24px+ regular, 18.66px+ bold)**. Amber and burnt orange never carry text. Coral is display‑only on cream.

### Type — two faces, hierarchy by size + color

- **Architects Daughter** (display, headings, character names, eyebrows in display). Hand‑drawn wobble. No bold cut exists — compensate with size, color (teal/coral), and **letter‑spacing 0.05em–0.10em** on display text.
- **Quicksand** (variable, weights 300–700). Body copy, bios, descriptions, small UI. Needs breathing room — body line‑height **never below 1.5**.
- Hierarchy is built from **size first, color second**. Weight is the last lever.

### Spacing — base 8

Every margin, padding, and gap is a multiple of 8px (4px allowed for icon‑to‑text). Tokens `--s-1` (4) through `--s-10` (128). Don't free‑hand.

### Radius

**8px is the house corner.** Buttons, inputs, cards, images all share it. The pill (`--r-pill`) appears only on chips/tags and the avatar ring. The icon mark is a perfect circle — that's the only true circle on the page.

### Backgrounds & surfaces

- **Cream is the page.** Default to it. Pure white never appears.
- **Full‑bleed teal panels** are used for hero moments, section breaks, and footers — never as a body‑text background unless the text is large.
- **Navy panels** are for the highest‑contrast moments: a single quote, a CTA stripe, the bottom of the page.
- **No bluish‑purple gradients, ever.** Where depth is needed, use a flat color shift (cream → cream‑deep) or the navy hard drop shadow.
- **Subtle paper texture** is encouraged on hero panels (a low‑opacity grain SVG). Not required.

### Borders & strokes

- **1.5px navy** is the default ink line — slightly heavier than 1px to read as drawn.
- Soft separators inside a panel: `rgba(26,74,74,0.18)`, 1px.
- Amber borders are decorative only (the ring around the logo mark; a frame around an illustration).

### Shadows — handmade, not floaty

Three flavors only:

- `--sh-2 / --sh-3`: **hard navy drop shadow** at `0 2px 0` or `0 4px 0`. The "drawn shadow" — sits flush, no blur. Used on buttons at rest.
- `--sh-card`: **soft card** — a hair of ink plus a low diffuse shadow. For cards and panels lifted off cream.
- `--sh-inset`: **ink stroke ring** — a 1.5px navy inset, used as a faux‑border on cards so we can pad freely.

No blurry blue glows, no neumorphism, no glassmorphism.

### Motion

- **Default duration: 220ms.** Fast for hover (`120ms`), slow for entrance (`380ms`).
- **Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`** (a calm out‑curve) for most things. **Bounce** (`0.34, 1.56, 0.64, 1`) is reserved for character entrances — never UI.
- **Fades are okay; spins, parallax, and reveal‑on‑scroll are not.**
- **Hover:** lift 2px (translate Y −2px), drop shadow grows from `--sh-2` to `--sh-3`, color does not change.
- **Press:** the button drops back to flush (`translateY(0)`, `--sh-1`), as if the page caught it.

### Transparency & blur

Almost none. The world is made of opaque shapes on cream. The only acceptable transparency is the 18% soft border (`--border-soft`) and the 30% amber tint behind a character avatar. No `backdrop-filter: blur`, no glass nav bars.

### Imagery vibe

Warm, cream‑grounded, slightly grainy. Characters are illustrated with **flat fills + a 2px ink outline**, never photoreal. Photography (when it appears) is **duotone in teal + cream**, slight film grain, no cool/cyan casts. Avoid stock photography of smiling families.

### Cards

A card is **cream‑deep on cream**, 8px radius, 1.5px navy inset ring, with `--sh-card`. Title in Architects Daughter teal, body in Quicksand navy. Padding `--s-5` (24px) or `--s-6` (32px) — never tighter.

### Layout

- **One column on mobile, max two columns on desktop** for content surfaces. Three‑column only for chip/tile grids.
- **Generous margins.** A landing page hero should breathe — min `--s-9` (96px) vertical padding on desktop.
- **Fixed elements** are rare. A footer is a footer; the nav is sticky‑optional, not sticky‑always.
- **Asymmetry is welcome.** Character cards can tilt ±1.5°. The wobble is the point.

---

## ICONOGRAPHY

Betwixt's brand mark — two bare child‑feet inside a teal disc with an amber ring — sets the iconographic tone: **rounded, slightly imperfect, ink‑outlined, never glossy**.

### What we copied in

- `assets/logo-raw.svg` — unstyled source
- `assets/logo-icon-primary.svg` — full‑color, on cream
- `assets/logo-icon-mono-teal.svg` — single‑color teal, on cream
- `assets/logo-icon-on-navy.svg` — cream + amber on dark
- `assets/logo-icon-cream.svg` — cream‑only outline for very dark

### UI icons

No icon font was provided. The recommended substitute is **[Lucide](https://lucide.dev)** — the closest free, open‑source set to the Betwixt feel:

- 1.5–2px stroke (matches our line weight)
- Rounded line caps & joins (matches the brand wobble)
- No fills by default (so they sit on cream without weight)
- Tabler Icons is the backup; their stroke is the same weight but the corners are slightly less rounded.

Use Lucide via CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="home"></i>` + `lucide.createIcons()`. Set `stroke="var(--bw-navy)"`, `stroke-width="1.75"`, `width=20 height=20` by default.

> ⚠️ **Substitution flag:** Lucide is a _substitute_ until a custom icon family is commissioned. When a real icon kit lands, replace the CDN ref and update this section. Custom Betwixt icons should be hand‑drawn (not vector‑traced), 2px stroke, slightly wobbly — same hand as the wordmark font.

### Emoji & unicode

- **No emoji** anywhere — see Content Fundamentals.
- **No unicode dingbats** (✓ ✗ → ★) as icon substitutes. If we need a checkmark, draw it. If we need an arrow, it's a Lucide `arrow-right`.
- The only unicode characters used decoratively are the **em‑dash** (—) and **ampersand** (&), in copy.

### Iconography don'ts

- ❌ No filled glyph icons (Material‑style).
- ❌ No duotone or two‑tone icons.
- ❌ No isometric / 3D icons.
- ❌ No drop‑shadowed icons.
- ❌ No emoji as UI.
- ❌ No iconography in body copy — icons sit at hierarchy peers (nav, buttons, callout headers), not inline.

---

## How to use this system

If you are an agent or developer producing a Betwixt artifact:

1. Read `colors_and_type.css` and link it from your HTML.
2. Wrap your page in `<body class="bw-root">` to inherit defaults.
3. Use the tokens, never raw hex/px values that aren't in the system.
4. If a needed token doesn't exist, **flag it** and propose one — don't free‑hand.
5. Pull components from `ui_kits/website/*.jsx` rather than re‑writing them.
6. Copy real assets out of `assets/`; don't inline‑redraw the logo.

See `SKILL.md` for the agent invocation contract.
