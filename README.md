# International Brotherhood of Hoodsters — Local 4663

Static site for Local 4663 (GitHub Pages → **local4663.com**).

## Live sites

| URL | Role |
| --- | --- |
| **https://local4663.com** | Landing — jacket + **JOIN LOCAL 4663** (launch mode: hover → Coming Soon) |
| **https://local4663.com/pledge** | Membership card — **PLEDGE TRIBUTE** (launch mode: no wallet) |
| **https://local4663.com/union/** | **Union Hall product preview** (synced from private `union-hall`) |
| **https://local4663.com/union/hall.html** | Hall — books, latest run, membership |
| **https://local4663.com/union/docs.html#fees** | Fee story / docs |
| **https://local4663.com/union/portfolio.html** | Portfolio + membership dividend receipt |
| https://gibtogether.github.io/ibh/ | GitHub Pages fallback |

**Launch mode (current):** no presale wallet; join/pledge buttons show **COMING SOON** on hover and do not navigate or copy addresses. Landing and pledge stay launch-mode; `/union/` is the Hall product preview (mock data, swap closed until `launched`).

## Pages (this repo)

| File / path | Role |
| --- | --- |
| `index.html` | Landing — jacket; launch-mode join button |
| `home.html` | Poster hero + logo (legacy home) |
| `join.html` | Redirects to landing |
| `pledge/index.html` | Membership card; launch-mode CTA (no wallet) |
| `union/` | Full Union Hall app preview (from private `gibtogether/union-hall`) |

## Assets

| File | Use |
| --- | --- |
| `IBHjacket.png` / `IBHjacket-20260721b.png` | Landing center image |
| `IBHposter.png` | Home page hero |
| `IBHlogo.png` | Site logo + favicon |
| `IBHjacketrear.png` | Jacket rear (reserved) |
| `IBHmembercard.png` | Membership card (pledge page) |
| `pledge/IBHlogo.png` | Pledge page logo |
| `pledge/IBHmembercard.png` | Pledge page card |
| `union/assets/*` | Hall app assets |

## Updating the Hall preview

Source of truth is the private repo **`gibtogether/union-hall`**. After Hall changes:

```bash
rsync -a --delete \
  --exclude '.git' --exclude 'docs' --exclude 'README.md' --exclude '.DS_Store' \
  ~/union-hall/ ~/ibh/union/
# keep union/README.md if present, then commit + push ibh main
```

GitHub Pages deploys from `main` automatically.

## Workflow

1. Branch → commit → open a PR (or push `main` for preview deploys)
2. Review and merge to `main`
3. GitHub Pages deploys from `main` automatically

## Local preview

```bash
python3 -m http.server 8080
```

Then visit:

- http://localhost:8080 — launch landing
- http://localhost:8080/pledge — launch pledge
- http://localhost:8080/union/hall.html — Hall product preview
