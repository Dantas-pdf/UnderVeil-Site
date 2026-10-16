# UnderVeil Site

Static website for UnderVeil, a story-driven roguelike. Plain HTML/CSS/JS with no build step, ready for GitHub Pages.

## Structure

```
index.html  download.html  gallery.html  about.html  contact.html
assets/css/  assets/images/  assets/js/
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/`.

## Configuration

- **itch.io link:** replace every `https://YOUR-ITCH-USERNAME.itch.io/underveil` (two download buttons in `download.html`, two links in `contact.html`).
- **Contact email:** there is no team inbox yet, so `CONTACT_EMAIL` in `assets/js/contact.js` is empty and the form copies the message for an itch.io comment. Set it to a real address and the form opens the visitor's email app instead.
