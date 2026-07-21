# International Brotherhood of Hoodsters — Local 4663

Static site for the IBH Union Hall.

## Live sites

| URL | Role |
| --- | --- |
| **https://local4663.com** | Landing — jacket + **JOIN LOCAL 4663** (launch mode: hover → Coming Soon) |
| **https://local4663.com/pledge** | Membership card — **PLEDGE TRIBUTE** (launch mode: no wallet) |
| https://gibtogether.github.io/ibh/ | GitHub Pages fallback |

**Launch mode (current):** no presale wallet, join/pledge buttons show **COMING SOON** on hover and do not navigate or copy addresses.

## Pages (this repo)

| File | Role |
| --- | --- |
| `index.html` | Landing — jacket; launch-mode join button |
| `home.html` | Union Hall home — poster hero + logo |
| `join.html` | Redirects to landing |
| `pledge/index.html` | Membership card; launch-mode CTA (no wallet) |

## Assets

| File | Use |
| --- | --- |
| `IBHjacket.png` | Landing center image |
| `IBHposter.png` | Home page hero |
| `IBHlogo.png` | Site logo + favicon |
| `IBHjacketrear.png` | Jacket rear (reserved) |
| `IBHmembercard.png` | Membership card (pledge page) |
| `pledge/IBHlogo.png` | Pledge page logo |
| `pledge/IBHmembercard.png` | Pledge page card |

## Workflow

1. Branch → commit → open a PR
2. Review and merge to `main`
3. GitHub Pages deploys from `main` automatically

## Local preview

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080 and http://localhost:8080/pledge
