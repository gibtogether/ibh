# International Brotherhood of Hoodsters — Local 4663

Static site for Local 4663 (GitHub Pages → **local4663.com**).

## Live sites

| URL | Role |
| --- | --- |
| **https://local4663.com** | Landing — jacket + **JOIN LOCAL 4663** (launch mode: hover → Coming Soon) |
| **https://local4663.com/pledge** | Membership card — **PLEDGE TRIBUTE** (launch mode: no wallet) |
| **https://local4663.com/books** | Easter egg — Union Books sealed / hall coming soon (unlinked) |
| https://buildtogetherlabs.github.io/ibh/ | GitHub Pages fallback |

**Launch mode (current):** no presale wallet; join/pledge buttons show **COMING SOON** on hover and do not navigate or copy addresses.

The full **Union Books / Hall product app** lives in the private repo `buildtogetherlabs/union-hall` and is **not** published on this site. Public `/books` is only a coming-soon notice (easter egg — not linked from the landing).

## Pages (this repo)

| File / path | Role |
| --- | --- |
| `index.html` | Landing — jacket; launch-mode join button |
| `home.html` | Poster hero + logo (legacy home) |
| `join.html` | Redirects to landing |
| `pledge/index.html` | Membership card; launch-mode CTA (no wallet) |
| `books/index.html` | Easter egg — Form 4663-B hall status; books sealed until launch |

## Assets

| File | Use |
| --- | --- |
| `IBHjacket.png` / `IBHjacket-20260721b.png` | Landing center image |
| `IBHposter.png` | Home page hero |
| `HoodstersLogoWhite.png` | Site logo + favicon (circle on white; all pages) |
| `IBHlogo.png` | Same as white logo (legacy filename) |
| `IBHlogoGreen.png` | Green-square logo — **profile images only** |
| `IBHjacketrear.png` | Jacket rear (reserved) |
| `IBHmembercard.png` | Membership card (pledge page) |
| `pledge/HoodstersLogoWhite.png` | Pledge favicon |
| `pledge/IBHmembercard.png` | Pledge page card |

## Workflow

1. Branch → commit → open a PR (or push `main` for deploys)
2. Review and merge to `main`
3. GitHub Pages deploys from `main` automatically

## Local preview

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080, http://localhost:8080/pledge, and http://localhost:8080/books
