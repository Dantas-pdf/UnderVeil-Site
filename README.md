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

- **Download link:** set `ITCH_URL` in `assets/js/download.js`.
- **Contact email:** set `CONTACT_EMAIL` in `assets/js/contact.js`. The form opens the visitor's email app (`mailto:`).
