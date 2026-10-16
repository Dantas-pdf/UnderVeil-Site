---
name: UnderVeil
description: A roguelike done right
colors:
  veil-magenta: "#d946ef"
  orchid-glow: "#e879f9"
  ink-on-accent: "#0a0a0a"
  relic-gold: "#ffd700"
  crypt-charcoal: "#1e1c1c"
  abyss-black: "#0a0a0a"
  reliquary-panel: "#1e1e1e"
  slate-well: "#2a2a2a"
  bone-white: "#f5f5f5"
  ash-gray: "#b0b0b0"
  success-green: "#4caf50"
  error-red: "#ff5252"
typography:
  display:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 700
  title:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
  body:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.5px"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  full: "50%"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "15px"
  md: "20px"
  lg: "30px"
  xl: "50px"
  section: "80px"
  section-lead: "112px"
components:
  button-primary:
    backgroundColor: "{colors.veil-magenta}"
    textColor: "{colors.ink-on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.orchid-glow}"
    textColor: "{colors.ink-on-accent}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.veil-magenta}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-download:
    backgroundColor: "{colors.veil-magenta}"
    textColor: "{colors.ink-on-accent}"
    rounded: "{rounded.lg}"
    padding: "18px 28px"
  card:
    backgroundColor: "{colors.reliquary-panel}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.md}"
    padding: "30px"
  input:
    backgroundColor: "{colors.slate-well}"
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "12px"
  nav-link:
    textColor: "{colors.bone-white}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
---

# Design System: UnderVeil

## Overview

**Creative North Star: "The Veil's Reliquary"**

The site is a dark display case for the game. Near-black surfaces recede so the pixel art, screenshots and mythology can be the exhibits, and a single magenta accent edges each one, like the trim on a reliquary. The site's job is to frame artifacts from beneath the Veil, never to compete with them.

Density is moderate and centred. Sections stack in a single column inside a 1200px case, alternating between two depths of black so the scroll reads as a passage of chambers. Cards are lifted, outlined panels that rise when you reach for them, so they feel tactile, like picking an item up off a pedestal.

The system ships with a theme switcher. **Purple on dark is canonical**: it is the identity every new surface is designed and judged in. Gold on dark and the two light variants remain as user-selectable alternates and must keep working, but they never lead a design decision.

**Key Characteristics:**
- Two-step black background (Crypt Charcoal sections, Abyss Black bands for header, footer and alternating sections).
- One magenta accent, used for actions, icons, outlines and the short underline bar beneath section headings.
- Lifted, outlined cards that rise 5–10px on hover with a deepening shadow.
- The home hero is the game's key art with the logo artwork as its title; page H1s are heavy (800) system sans, everything else plain.
- Real in-game pixel art as the main imagery.

## Colors

A near-monochrome crypt of blacks and bone whites, cut by one saturated magenta.

### Primary
- **Veil Magenta** (#d946ef): the accent. Primary button fill, outline-button stroke, card borders, icons, active nav underline, the bar beneath headings. Everything that says "this is interactive" or "this is the exhibit".
- **Orchid Glow** (#e879f9): the hover and active fill of accent buttons. On dark, buttons brighten when you reach for them.
- **Ink on Accent** (#0a0a0a): text and icons placed on any accent fill. Read it from `--on-primary`.

### Secondary
- **Relic Gold** (#ffd700): the alternate accent, used only when the visitor switches to the gold theme. It replaces Veil Magenta one-for-one and never appears alongside it.

### Neutral
- **Crypt Charcoal** (#1e1c1c): default page background and most section backgrounds.
- **Abyss Black** (#0a0a0a): the deeper band, used for the sticky header, footer, the download offer, the closing download bands and alternating sections (crafting, screenshots).
- **Reliquary Panel** (#1e1e1e): card and form-container surface.
- **Slate Well** (#2a2a2a): input fields and social-icon discs, sunk one step lighter than the panel.
- **Bone White** (#f5f5f5): primary text and headings.
- **Ash Gray** (#b0b0b0): secondary text, card body copy, footer links.

### Feedback
- **Success Green** (#4caf50) and **Error Red** (#ff5252): form-message states only.

### Named Rules
**The One Relic Rule.** Only one accent hue is live at a time. Magenta and gold are themes, not a pair. Never put both on one screen.

**The Theme-Variable Rule.** Accent colors are always read from `--primary-color`, `--primary-dark`, `--on-primary` and `--border-color`, never hard-coded, so all four theme combinations keep working. Purple dark is the `:root` default; gold is the opt-in `body.color-theme-gold`, and `.light-theme` darkens the accent (#a21caf purple, #8a6d00 gold) with white `--on-primary` so it stays readable on white.

## Typography

**Display Font:** Segoe UI (with Tahoma, Geneva, Verdana, sans-serif)
**Body Font:** the same stack

**Character:** a single system sans that gets its drama from weight rather than a display face. The only display lettering is the logo artwork itself. Plain and legible, so the pixel art carries the personality.

### Hierarchy
- **Display** (800, clamp 2.2–3.2rem, 1.1 line height): page H1s ("Play the UnderVeil demo", "About UnderVeil"). The home hero has no text title; its H1 is the logo image.
- **Headline** (700, 2.2rem; the lead section scales to 2.9rem): section H2s, centred, with the accent bar beneath. "What's UnderVeil?" and contact headings step down to 2rem / 1.8rem and align left.
- **Title** (700, 1.5rem): card H3s (features, mythologies).
- **Body** (400, 1rem, 1.6 line height): paragraphs in Ash Gray. Intro paragraphs cap at 700px and open up to 1.7–1.8 line height.
- **Label** (600, 0.9rem, uppercase, 0.5px tracking): button text.

### Named Rules
**The Underline Bar Rule.** Every section heading carries a short accent bar beneath it: 60×3px under centred headlines, 40×2px under left-aligned headings and footer titles. That bar is the heading's ornament. Don't add others.

## Layout

A centred single-column flow inside a `container` (max 1200px, 20px side padding). Sections are full-bleed colour bands with 72–88px vertical padding (112px for the lead section), alternating between Crypt Charcoal and Abyss Black. The home hero fills min(88vh, 860px) and anchors its content to the bottom.

Content inside sections uses auto-fit grids: feature cards `minmax(250px, 1fr)`, mythology cards `minmax(320px, 1fr)`, footer columns `minmax(200px, 1fr)`, all with 30px gaps. Two-column splits (What's UnderVeil, contact) collapse to one column on narrow screens.

Breakpoints are max-width: 992px, 900px (download offer stacks), 768px (main tablet/mobile switch; header becomes two rows), 576px (phone: mythology cards stack and centre). In-page anchor targets get `scroll-margin-top: 110px` to clear the sticky header.

Spacing steps: 10 / 15 / 20 / 30 / 50 / 80px. Headings sit 20–50px above their content, more when centred over a grid.

## Elevation & Depth

Hybrid. Depth comes first from the two-step black (Abyss Black bands behind Crypt Charcoal sections), then from neutral black shadows on lifted surfaces. Shadows are structural and respond to interaction: cards rest on a soft shadow and rise into a deeper one on hover.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2)`): cards, form containers and info cards at rest.
- **Lifted** (`box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3)`): the hover state of cards, paired with `translateY(-5px)` to `(-10px)`.
- **Header** (`box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5)`): the sticky header's edge over content.
- **Download CTA** (`box-shadow: 0 6px 18px rgba(0,0,0,0.25)`): the large download buttons.

### Named Rules
**The Neutral Shadow Rule.** Shadows are always black at 0.2–0.5 alpha with a real y-offset. Depth is never a coloured glow.

## Shapes

Gently rounded: 8px on cards, carousel and map frames; fully pill-shaped (999px) for the Delve → Gather → Craft → Grow loop steps; 4px on buttons, inputs and nav pills; 10px on the oversized download buttons; full circles for icon discs (mythology icons, social icons, badges). Borders are 1px in the accent colour on cards and 2px on outline buttons and mythology icon rings. Undiscovered or locked content uses a dashed border and reduced opacity, the one place the shape language signals state.

## Components

### Buttons
Tactile and confident. They lift 2px on hover.
- **Shape:** slightly rounded (4px).
- **Primary:** Veil Magenta fill, Ink on Accent uppercase label (600, 0.9rem, 0.5px tracking), 10px 20px padding. Large variant: 12px 24px at 1rem.
- **Hover:** fill brightens to Orchid Glow, `translateY(-2px)`, 0.3s ease. The label keeps `--on-primary` (link-buttons must not inherit the general link hover colour).
- **Focus:** every interactive element shows a 2px accent `:focus-visible` outline, offset 3px. Never remove it.
- **Outline:** transparent with a 2px Veil Magenta stroke and magenta text. Fills magenta on hover.
- **Download:** the download page's primary action: filled Veil Magenta, Ink on Accent, 18px 28px, 1.05rem, 700, 10px radius, with a download icon. Full-width below 900px. Its secondary action is a plain link underlined in the accent, never a second button of equal weight.
- **Disabled:** 0.5 opacity, not-allowed cursor.

### Cards / Containers
Exhibits on pedestals.
- **Corner Style:** 8px.
- **Background:** Reliquary Panel.
- **Shadow Strategy:** Rest, rising to Lifted on hover (see Elevation & Depth).
- **Border:** 1px in the accent colour.
- **Internal Padding:** 30px (20px for compact info cards).
- **Feature card:** centred, a 2.5rem accent icon above a Title and Ash Gray body.
- **Mythology card:** horizontal, a 70px circular icon ring beside the body. The "undiscovered" variant is transparent and dashed with a faded icon.

### Inputs / Fields
- **Style:** Slate Well fill, 1px accent border, 4px radius, 12px padding, 1rem text. Textareas resize vertically from 120px.
- **Focus:** the border switches to the primary colour and the global accent `:focus-visible` outline stays.
- **Labels:** 600 weight, Bone White, 8px above the field.

### Contact form
One Reliquary Panel form with honest wording: the button names what actually happens ("Copy my message" while there is no team inbox, "Open in my email app" once `CONTACT_EMAIL` is set) and a line above the form says where the message goes. The result appears below the button as a lasting `role="status"` line in Bone White (Error Red when it failed), never as a self-dismissing toast. Optional fields say "(optional)" in Ash Gray; a live character counter sits under the message. Without JavaScript the button submits nothing and a `<noscript>` line points to the itch.io page.

### Navigation
Sticky Abyss Black header with the logo image on the left and a row of links on the right (600 weight, Bone White, 5px 10px padding). On hover and active, the text turns to the accent and a 2px accent underline grows from 0 to full width over 0.3s. The theme and colour toggles sit with the nav and carry `aria-label`s. Below 768px the header is two rows: logo and toggles on top, the five links spread across the second row.

### Hero (home, signature)
The key art (`assets/images/brand/key-art.png`, pixelated) fills the first screen under two dimming layers: a soft dark pool behind the logo and a vertical gradient that fades into the page. The logo image (screen-blended so its black drops out) stands under the eclipse; below it a one-sentence tagline in Bone White (max 34ch), the primary button and a muted "Windows · Free demo on itch.io" note. A dark fill colour sits behind the art in case it fails to load.

### Carousel (signature)
A full-width, 8px-rounded frame showing one in-game screenshot at a time at its native 16:9 shape (pixelated rendering, Abyss Black behind), sliding on `transform 0.5s ease`. A short title and one-line caption sit under each shot. Controls: 40px round arrows centred on the image, 24px ring dots (filled when current), a "1 / 5" counter, arrow keys and swipe.

### Download offer
The download page opens on Abyss Black with the offer on the left (display-size H1, one-sentence lede, filled primary download button, then a quiet secondary link underlined in the accent) and a 1px-outlined 16:9 screenshot on the right; it stacks below 900px with the button full-width. A muted note under the button states platform, size and what the click does ("Windows · About 200 MB · Opens itch.io in a new tab").

### Spec table
Requirements are one comparison table on a Reliquary Panel with a 1px accent outline and 8px radius: row headers in Bone White, values in Ash Gray, column headers carry the FPS expectation as a small second line. Never split the same facts into summary cards plus lists.

### Sketchbook cards (About)
The one sanctioned light surface on dark: early and current sprites drawn on white sit on Bone White cards (#f5f5f5) with the 1px accent outline, 8px radius and the Rest shadow, labelled in #444444 and joined by an accent arrow. Use it only to show the game's art as it was made, never as a general card style.

### FAQ
Native `<details>` items on Reliquary Panel with the 1px accent outline; the accent `+` rotates into a `×` when open. Each item has an `id` so answers can be linked, and answers link onward to the Download page where relevant.

### Gallery exhibits and lightbox
Exhibits are figures: the picture inside a 1px accent-outlined, 8px-rounded frame on Abyss Black (pixelated, Rest shadow lifting to Lifted on hover, no zoom), with the title and a one-line description always visible beneath. Scenes keep 16:9, area art stays square, and sprites sit whole on sketchbook cards; one 16:9 lead exhibit opens the page. Each picture is a link to the full image, so it works without JavaScript; with it, a native `<dialog>` lightbox (always dark, whatever the theme) steps through the current section with named 44px round buttons, a "3 / 7" counter, arrow keys, Esc and swipe, and returns focus to the opener.

### Image sizes
Ship pictures at the size they are shown, not the source size: the header logo uses `assets/images/brand/underveil-logo-160.png`, the hero logo `assets/images/brand/underveil-logo-480.png`, the carousel `screenshots/*-1280.png`, gallery tiles `screenshots/*-800.png` (scenes) and `areas/*-600.png` (area art). Full-size originals stay for lightbox links and social previews. Every `<img>` declares `width` and `height`, and anything below the first screen loads lazily.

### Page rhythm (home)
The key-art hero leads; the Mythologies section is the lead content section (larger headline, 112px padding); supporting sections are quieter, and "Why Play" uses plain columns with no card boxes. The page closes on an Abyss Black download band that repeats the primary action and its "Windows · Free demo on itch.io" note.

## Do's and Don'ts

### Do:
- **Do** design every new surface in purple on dark first, then check it in gold and in the light theme.
- **Do** open the home page on the game's own key art (`assets/images/brand/key-art.png`) with the logo image, not stock footage.
- **Do** read accent colours from `--primary-color` / `--primary-dark` / `--on-primary` / `--border-color` so the theme switcher keeps working.
- **Do** give section headings the accent underline bar (60×3px centred, 40×2px left-aligned).
- **Do** make cards lift on hover with `translateY` plus the Rest → Lifted shadow step.
- **Do** let real in-game pixel art be the imagery. The reliquary displays the game, it doesn't decorate around it.
- **Do** end every page on a way to the download: the closing band repeats "Play the free demo" and its platform note.

### Don't:
- **Don't** put white text on Veil Magenta (about 3.8:1) or Relic Gold (about 1.4:1). Text on accent fills is Ink on Accent (#0a0a0a, about 5.3:1 on magenta).
- **Don't** add tiny uppercase labels above headings. Work that information into the heading or the body; in-game terms (Omens, Statues) are set in accent-coloured semibold inside the description.
- **Don't** use thick one-side or top accent borders on rounded cards. Keep the uniform 1px outline.
- **Don't** use coloured glows. Follow the Neutral Shadow Rule.
- **Don't** show Veil Magenta and Relic Gold together on one screen.
