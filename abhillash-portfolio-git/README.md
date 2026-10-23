# VoxLua Developer Portfolio

A responsive monochrome portfolio starter with separate HTML, CSS, JavaScript, and asset files.

## Open locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or open the folder in VS Code.
3. For local development, use the VS Code Live Server extension if you have it.

## Before publishing
- Replace `hello@yourdomain.com` in `index.html` with your real public contact email.
- Replace the illustrative SVG portrait (`assets/developer-portrait.svg`) with your own photo if you want your actual face shown.
- Add real screenshots, GitHub links, and demos for each project.
- Review the skills/tools list and remove anything you do not actively use.
- The contact button opens an email draft. It does not submit to a server or send an email automatically.

## Structure
- `index.html` — page structure and content
- `css/styles.css` — layout, theme, responsive styles, and motion
- `js/main.js` — mobile navigation and current year
- `assets/developer-portrait.svg` — original monochrome illustration
- `package.json` — optional local development commands

## Backend note
This portfolio is currently a static frontend, so it does not need a backend to display. There is no enquiry API or database included. A secure backend for contact forms would need a serverless/API endpoint, email provider credentials stored as environment variables, validation, spam protection, and rate limiting. Do not put private API keys in browser JavaScript.
