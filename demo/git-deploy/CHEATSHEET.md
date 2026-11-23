# Git, GitHub and Vercel Cheat Sheet

## First-time Git setup (once per computer)
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Everyday Git
| Command | What it does |
|---|---|
| `git init` | Start tracking this folder |
| `git status` | See what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot with a message |
| `git log --oneline` | See the history |
| `git branch` | List branches |
| `git switch -c new-branch` | Create and move to a new branch |
| `git switch main` | Go back to main |
| `git merge new-branch` | Bring a branch into the current one |
| `git pull` | Download the latest changes |
| `git push` | Upload your commits |

## Push to GitHub
1. Create an empty repo on github.com (no README).
2. Run:
```
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

## .gitignore
A file listing what Git must NOT track. Never push `node_modules` or `.env` (secrets live in .env).

## Deploy on Vercel
1. Sign in at vercel.com with GitHub.
2. Click Add New, then Project, and import your repo.
3. Set **Root Directory** to `04-react`.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Add environment variables if the app needs any.
6. Click Deploy. You get a live link.
7. Push again to GitHub and Vercel redeploys automatically.
