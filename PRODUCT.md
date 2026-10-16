# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Roguelike players: genre fans who arrive from itch.io, social posts or word of mouth and are deciding whether UnderVeil is worth trying. Their job on the site is to work out what the game is, whether it looks good, whether their PC can run it, and then download it.

## Product Purpose

The marketing and info site for UnderVeil, a story-driven 2D pixel-art roguelike for Windows. A visit succeeds when a player downloads the game (a free demo, with the full game for purchase) from itch.io. The secondary pages (gallery, about, FAQ, system requirements, contact) exist to answer the doubts that stand between interest and download.

## Positioning

A small, personal roguelike that grew out of a school project, with mythology built into the systems: Roman gods grant in-run buffs through **Omens**, broken Greek **Statues** in the hub are rebuilt for permanent upgrades, and more pantheons are teased as "undiscovered". Add to that a resource loop between runs (Delve → Gather → Craft → Grow stronger: crafting supplies, hiring hunters, the Merchant's potions, unlocking skills), a dense story with easter eggs, multiple endings, and a narrative where you "put an end to the flame that has been burning for far too long."

## Operating Context

- Players read the site on desktop (the game is Windows, keyboard and mouse) and on phones when they come from social links.
- The game is distributed only through itch.io, so the download CTA always goes there.
- The Download page includes a "Can my PC run it?" section with minimum and recommended specs. Performance on modest hardware is a stated priority.

## Capabilities and Constraints

- Static HTML/CSS/JS with no build step, deployed on GitHub Pages. Pages: `index.html`, `download.html`, `gallery.html`, `about.html`, `contact.html`. Shared styles in `assets/css/style.css`, per-page scripts in `assets/js/`.
- There is no real contact email yet (info@UnderVeil.com is one of the footer jokes). The contact form copies the visitor's message for pasting into an itch.io comment; setting `CONTACT_EMAIL` in `assets/js/contact.js` switches it to opening their email app.
- The itch.io URL is still a placeholder (`YOUR-ITCH-USERNAME` in `download.html` and `contact.html`) until the real page exists.
- **Pricing:** a free demo is available; the full game will be paid (the FAQ says it "will be available for purchase", so don't claim it is on sale yet).
- Platforms: Windows only. Linux, Mac and consoles are hoped for but not promised.
- Offline, single-player, procedurally generated runs with permadeath and meta-progression.
- Terminology: UnderVeil (capital V), the Veil, Omens, Statues, the hub, runs, the Merchant, hunters.

## Brand Commitments

- Name: **UnderVeil**. Tagline in use: "A roguelike done right". Logo at `assets/images/brand/underveil-logo.png`.
- Voice: earnest indie team with a playful streak. The tongue-in-cheek footer contact details (Soul Society address, phone number, info@UnderVeil.com) are intentional jokes and are kept as they are.
- Team credits: Framer (Main Developer), Vope (Co-Developer and Backer). "Our headquarters in Lazarim."
- The team avatars on the About page (`assets/images/team/framer.jpg`, `assets/images/team/vope.jpg`) are the team's deliberate choice; keep them unless the team supplies replacements.
- Tools credited: Aseprite, itch.io, Freesound.org.

## Evidence on Hand

- In-game pixel art and screenshots in `assets/images/`: `screenshots/` (in-game shots), `areas/` (Abyssal Foundry, Forsaken Caverns, Overgrown Ruins), `items/` (weapon and item sprites), `equus/` (the main character's four designs), `brand/` (logo, key art, favicon) and `team/` (avatars).
- Real system requirements (Download page) and a real FAQ (About page).
- No reviews, player counts, press, awards or testimonials exist. Do not invent any.

## Product Principles

1. Every page moves a player toward the itch.io download, and the download path is never more than one click away.
2. Show the game itself. Real pixel art and screenshots are the strongest proof the site has.
3. Lead with what's distinctive (mythology-driven systems, the between-run loop, the story) over generic roguelike claims.
4. Be honest about scope: a small team, Windows only, a demo with paid full game. No inflated claims.
5. Keep the playful indie voice, but never let a joke obscure a real fact a player needs (price, platform, requirements).
