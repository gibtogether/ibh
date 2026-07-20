# International Brotherhood of Hoodsters — Local 4663

Static site for the IBH Union Hall.

## Live site

**https://gibtogether.github.io/ibh/**

## Pages

| File | Role |
| --- | --- |
| `index.html` | Landing — jacket + **JOIN LOCAL 4663** (launch mode: hover shows **COMING SOON**) |
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
