## Coming Soon placeholder

This project can serve a static "Coming Soon" page in production while the app is under development.

- Page file: `public/coming-soon.html`
- Vercel routing: `vercel.json` rewrites all routes to `/coming-soon.html`

Disable the placeholder when the app is ready to launch:

1. Edit `vercel.json` and change the rewrite destination back to `/` (or remove the rewrite to let the SPA handle routes).
2. Deploy again.

Search engine indexing is blocked for the placeholder via a `noindex` meta tag and `public/robots.txt`.
