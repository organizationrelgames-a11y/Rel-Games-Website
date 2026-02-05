# Rel Games Website

Static website for Rel Games.

## Quick local preview

Run from this folder:

```bash
cd "/Users/YoavTzori/Documents/New project"
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Where to edit content

- Home page HTML: `/Users/YoavTzori/Documents/New project/index.html`
- Styles: `/Users/YoavTzori/Documents/New project/styles.css`
- Games list (easy updates): `/Users/YoavTzori/Documents/New project/games.json`
- Images/icons/logo: `/Users/YoavTzori/Documents/New project/assets/`
- Web ads sellers file: `/Users/YoavTzori/Documents/New project/ads.txt`
- Mobile app ads sellers file: `/Users/YoavTzori/Documents/New project/app-ads.txt`

## Add or change a game

Edit `games.json` and add/update items in `games`:

```json
{
  "name": "Your Game",
  "description": "Short game description",
  "icon": "assets/your-icon.png",
  "links": {
    "play": "https://play.google.com/store/apps/details?id=...",
    "appStore": "https://apps.apple.com/app/id..."
  }
}
```

Then drop the icon file in `assets/`.

## Image size guide

- Game icon (`games.json` -> `icon`):
  - Recommended: `512x512` px
  - Minimum: `256x256` px
  - Format: `.png` (preferred), `.jpg`, or `.webp`
  - Keep 1:1 square ratio

- Main right hero image (`/Users/YoavTzori/Documents/New project/assets/hero-character.svg`):
  - Recommended if using PNG/JPG: `900x900` px
  - Minimum: `600x600` px
  - Keep 1:1 square ratio
  - You can replace this file with your own art and keep the same filename, or update the `src` in `/Users/YoavTzori/Documents/New project/index.html`

- Logo / favicon (`/Users/YoavTzori/Documents/New project/assets/logo.svg`):
  - Recommended source: `512x512` equivalent
  - If using PNG instead of SVG, also export a `32x32` favicon version

## Free hosting option (GitHub Pages)

This repo already includes a Pages deploy workflow:
`/Users/YoavTzori/Documents/New project/.github/workflows/pages.yml`

### Publish steps (non-technical)

1. Create a new private repo on GitHub (for example: `rel-games-site`).
2. Upload all files from this folder into that repo.
3. In GitHub repo settings, enable Pages (Source: GitHub Actions).
4. Wait for deployment to finish in Actions tab.
5. You get a free URL like:
   `https://<your-github-username>.github.io/<repo-name>/`

### Connect your domain later (`rel-games.com`)

When you have credentials:

1. In GitHub Pages settings, set custom domain to `rel-games.com`.
2. In GoDaddy DNS add:
   - `A` record for `@` to `185.199.108.153`
   - `A` record for `@` to `185.199.109.153`
   - `A` record for `@` to `185.199.110.153`
   - `A` record for `@` to `185.199.111.153`
   - `CNAME` record for `www` to `<your-github-username>.github.io`
3. Wait for DNS propagation (can be up to 24-48 hours).

## ads.txt and app-ads.txt

- `ads.txt` is for website ad inventory.
- `app-ads.txt` is for mobile apps.
- Keep only networks you actually use.
- Replace placeholder seller IDs with real IDs from each mediation partner dashboard.
