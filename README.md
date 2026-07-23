# International Brotherhood of Hoodsters — Local 4663

Static site for Local 4663 (GitHub Pages → **local4663.com**).

## Live sites

| URL | Role |
| --- | --- |
| **https://local4663.com** | Landing — jacket + **JOIN LOCAL 4663** (launch mode: hover → Coming Soon) |
| **https://local4663.com/pledge** | Membership card — **PLEDGE TRIBUTE** (launch mode: no wallet) |
| **https://local4663.com/books** | Easter egg — sealed notice (unlinked) |
| **https://buildtogetherlabs.github.io/ibh/union/** | **Product preview** — full Union Books UI (mock data) |
| https://buildtogetherlabs.github.io/ibh/ | GitHub Pages fallback |

**Launch mode (current):** public landing/pledge show **COMING SOON** on hover (no wallet).

**Product preview:** mirror of private `buildtogetherlabs/union-hall` under `union/`.  
Use **https://buildtogetherlabs.github.io/ibh/union/** only — on **local4663.com** paths under `/union` redirect home so the marketing domain stays launch-only.

## Pages (this repo)

| File / path | Role |
| --- | --- |
| `index.html` | Landing — jacket; launch-mode join button |
| `home.html` | Poster hero + logo (legacy home) |
| `join.html` | Redirects to landing |
| `pledge/index.html` | Membership card; launch-mode CTA (no wallet) |
| `books/index.html` | Easter egg — Form 4663-B hall status; books sealed until launch |
| `union/` | Product preview (GitHub.io only; blocked on local4663.com) |

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
