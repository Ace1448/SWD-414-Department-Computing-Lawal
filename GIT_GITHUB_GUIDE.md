# SWD 414: Git and GitHub Practical Guide

## 1. Install and configure Git
Install Git if necessary, then open Terminal (macOS/Linux) or Git Bash (Windows). Set your own identity:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your-email@example.com"
```

Check:
```bash
git --version
git config --list
```

## 2. Open the project folder
In the terminal, change directory to the folder containing these website files. If you extracted the ZIP to Downloads, adjust the path to match your computer.

```bash
cd path/to/SWD414_Git_GitHub_Assignment
git init
git status
```

## 3. First commit
```bash
git add .
git commit -m "Create initial department website pages"
git log --oneline
```

## 4. Make and commit a homepage improvement
Edit `index.html`, for example add a short announcement to the homepage. Then run:

```bash
git status
git add index.html
git commit -m "Improve homepage content"
git log --oneline
```

## 5. Create a branch and develop Contact Us
```bash
git switch -c feature/contact-page
```
Edit `contact.html` or `style.css` while on this branch, then:

```bash
git status
git add contact.html style.css script.js
git commit -m "Build contact page"
git switch main
git merge feature/contact-page
git log --oneline --graph --all
```

If your initial branch is named `master`, use `git branch -M main` before creating/pushing the remote repository. If Git reports a merge conflict, open the named file, resolve the conflict markers, save it, then `git add` the file and complete the merge as Git instructs.

## 6. Create and connect a GitHub repository
1. Sign in to GitHub and create a **new empty repository** named `swd414-department-computing`. For the simplest setup, do not initialize it with a README, licence, or .gitignore because your local project already has files.
2. Copy the repository's HTTPS URL from GitHub.
3. In the project terminal, run the following commands, replacing the example URL with your own:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/swd414-department-computing.git
git remote -v
git push -u origin main
git push -u origin --all
```

If `origin` already exists, check it with `git remote -v`; update it with `git remote set-url origin YOUR-REPOSITORY-URL` rather than adding it again.

## 7. Update and push
Make another change to a page, save it, and run:

```bash
git status
git add .
git commit -m "Update website after GitHub upload"
git push
```

## 8. Commit vs push
- **Commit:** saves a snapshot of staged changes in your local Git repository. It records the change on your computer.
- **Push:** sends local commits to a remote repository such as GitHub so the remote copy is updated and collaborators can access the changes.

## 9. Screenshots to capture for submission
Take your own screenshots after completing the steps:
1. Homepage displayed in a browser.
2. About Us, Programmes, and Contact Us pages.
3. Terminal showing `git status`.
4. Terminal showing at least three commits: `git log --oneline`.
5. Terminal showing branches: `git branch -a`.
6. Terminal showing branch and merge history: `git log --oneline --graph --all`.
7. GitHub repository page showing the uploaded files and commit history.
8. The final GitHub repository URL.

## Troubleshooting
- **`git: command not found`:** install Git and reopen the terminal.
- **Authentication prompt/error:** follow GitHub's current sign-in instructions; do not put a password or token in your source files.
- **Wrong branch name:** `git branch -M main`.
- **Remote already exists:** use `git remote -v` and `git remote set-url origin ...`.
- **Changes not pushed:** run `git status`, commit the changes if needed, then `git push`.

Do not invent screenshots or a GitHub URL. Use your actual repository and screenshots from your own computer.
