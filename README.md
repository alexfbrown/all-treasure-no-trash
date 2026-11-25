# All Treasure, No Trash

A learning project for a single-store storefront selling new and preowned games,
electronics, and tech gadgets. Built step by step to practice modern React,
TypeScript, and Python.

The Next.js frontend currently has a homepage and a products placeholder page.
The Python work currently consists of a validation exercise; the Django API and
PostgreSQL database are planned and are not required to run the frontend.

## Prerequisites

- Git.
- Node.js and npm. Development currently uses Node.js 26; use the same major
  version for consistency. The component generator requires Node.js 22 or newer.
- Python 3.14 if you want to run the Python exercise.

The commands below use Windows PowerShell.

## First setup on another computer

Open a terminal in the directory where you keep projects:

```powershell
git clone https://github.com/alexfbrown/all-treasure-no-trash.git
cd all-treasure-no-trash/frontend
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The products placeholder is
at [http://localhost:3000/products](http://localhost:3000/products).
Use the URL printed by the server if port 3000 is already occupied.

Keep the terminal running. Saving frontend files updates the browser
automatically. Press **Ctrl+C** to stop the server.

If PowerShell blocks the npm script launcher, use `npm.cmd` instead of `npm`
in these commands. Python environment activation is not needed for the frontend.

## Returning to an existing clone

From the repository root, check for local work before pulling. Commit any changes
you want to keep, or stash them, before continuing.

```powershell
git status
git pull --ff-only
cd frontend
npm ci
npm run dev
```

If Git reports that branches have diverged, resolve that before continuing.
`npm ci` installs the versions recorded in `package-lock.json` and replaces the
existing `node_modules` folder. It does not require committing dependencies.

When dependencies have not changed, a normal local restart only needs:

```powershell
cd frontend
npm run dev
```

## Python exercise (optional)

From the repository root, create a separate environment on each computer:

```powershell
py -V:3.14 -m venv backend/.venv
.\backend\.venv\Scripts\python.exe .\excercises\python\used_item.py
```

The `excercises` folder spelling reflects the current repository. On macOS or
Linux, use `python3.14 -m venv backend/.venv`, then run the exercise with
`backend/.venv/bin/python excercises/python/used_item.py`.

## Development tools

From `frontend`:

```powershell
npm run lint
npm run generate -- ProductCard --dry-run
npm run generate -- ProductCard
```

See [component generation instructions](frontend/GENERATING.md). Create Next.js
route pages manually using the `app/<route>/page.tsx` convention.

To install and use the repository's Prettier tooling, run from the repository root:

```powershell
npm ci
npm run format
```

Prettier handles supported frontend and configuration files. Python formatting
uses the recommended Black Formatter VSCode extension.

## Working across computers

Commit and push work before switching devices. Pull on the other device before
editing. Git tracks source files and dependency lockfiles, while `node_modules`,
Python virtual environments, npm caches, and local environment files stay local.
Never commit credentials or real secrets.
