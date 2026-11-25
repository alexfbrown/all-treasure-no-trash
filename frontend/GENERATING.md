# Component generation

Run commands from `frontend` in a second terminal while the dev server runs.

```powershell
# Preview a reusable component without creating files.
npm run generate -- ProductCard --dry-run

# Create components/ProductCard/ProductCard.tsx.
npm run generate -- ProductCard

```

The `--` forwards arguments from npm to the generator.

Configuration lives in `generate-react-cli.json`. Components use the generator's
built-in TypeScript template. Save generated files in VSCode to apply our
four-space formatting. Add `"use client"`
when the component needs client capabilities such as state or event handlers.

Stylesheets, test stubs, Storybook stories, and lazy wrappers are disabled.
Write meaningful tests as behavior is introduced; the generator does not
replace tests or automatically add navigation links or component imports.

Create Next.js route pages manually. From `frontend`, for a new `/products` route:

```powershell
mkdir app/products
New-Item app/products/page.tsx -ItemType File
```

Write a default-exported React component in that file. If the folder or page
already exists, open the existing file instead.

After cloning on another computer, `npm ci` installs the pinned generator too.
