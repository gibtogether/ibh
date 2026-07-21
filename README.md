# International Brotherhood of Hoodsters — Local 4663

Static site for the IBH Union Hall.

## Live sites

| URL | Role |
| --- | --- |
| **https://local4663.com** | Landing — jacket + **JOIN LOCAL 4663** |
| **https://pledge.local4663.com** | Airdrop / tribute — membership card + **PLEDGE TRIBUTE** ([repo](https://github.com/gibtogether/pledge)) |
| https://gibtogether.github.io/ibh/ | GitHub Pages fallback for landing |

## Pages (this repo)

| File | Role |
| --- | --- |
| `index.html` | Landing — jacket; join links to `pledge.local4663.com` |
| `home.html` | Union Hall home — poster hero + logo |

## Assets

| File | Use |
| --- | --- |
| `IBHjacket.png` | Landing center image |
| `IBHposter.png` | Home page hero |
| `IBHlogo.png` | Site logo + favicon |
| `IBHjacketrear.png` | Jacket rear (reserved) |

## Workflow

1. Branch → commit → open a PR
2. Review and merge to `main`
3. GitHub Pages deploys from `main` automatically

## Local preview

Open `index.html` in a browser, or from the repo root:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080
