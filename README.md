# The Nook Loyalty App

A QR-based digital loyalty card app for a real cafe built to replace paper punch cards with a secure, installable web app.

**Live App:** [nook.margarita-tech.dev](https://nook.margarita-tech.dev)

---

## What It Is

The Nook is a full-stack loyalty system with three distinct roles: customers, staff, and admins. Customers get a personal QR loyalty card on their phone. Staff scan QR codes and add stamps at checkout. Admins monitor activity through a protected dashboard.

It's built as a Progressive Web App, customers can install it directly to their home screen on Android or iOS with no App Store involved.

---

## Features

### Customer
- Create an account with phone number and optional birthday
- Sign in with phone + 4-digit PIN
- Personal QR loyalty card, you show it at checkout
- Track stamp progress toward a free coffee
- View pending and redeemed rewards with expiry dates
- Full visit history
- Birthday month bonus reward
- Change PIN or delete account from settings

### Staff
- PIN-protected staff login
- Search customers by name or phone
- Scan customer QR codes with the device camera
- Add stamps and redeem free coffee rewards
- Grant birthday rewards
- Brute force lockout after 3 failed PIN attempts

### Admin
- Separate PIN-protected admin login (accessible from staff panel)
- Dashboard with live stats: members, visits, redemptions, active rewards
- Average stamp progress across all members
- Top customers and recent activity feed
- Full customer list with search
- Add or remove stamps per customer
- Grant rewards and redeem on behalf of customers
- View individual customer history
- QR scanner with phone lookup fallback

### Rewards System
- 10 stamps = 1 free coffee
- Birthday month = 1 free coffee (once per year)
- Rewards expire after 90 days

---

## Security

Security was a core focus of this project, not an afterthought.

- **Custom JWT auth** tokens are signed with a `JWT_SECRET` and verified in every Edge Function using `djwt`. Supabase's built-in `auth.getUser()` is not used because tokens are issued by the app, not Supabase Auth.
- **PIN hashing** customer and staff PINs are hashed with SHA-256 salted with `JWT_SECRET` before storage. Plain PINs never touch the database.
- **Brute force protection** both staff and customer PIN flows lock out after 3 failed attempts for 20 minutes, tracked in a `failed_attempts` table accessible only via the service role key.
- **Role-based Edge Functions** sensitive actions (add stamp, redeem reward, fetch all customers) are handled by Supabase Edge Functions that verify JWT role claims before executing.
- **RLS with no public policies** the `failed_attempts` table has Row Level Security enabled with no policies, meaning only the service role key can read or write it.
- **No credentials in the repo** API keys are injected at deploy time via GitHub Actions secrets and substituted into `config.js` using placeholder replacement. The public repo contains no real credentials.

---

## Tech Stack

**Frontend**
- Vanilla HTML, CSS, JavaScript (no framework)
- Multi-file module structure: `config.js`, `db.js`, `utils.js`, `auth.js`, `customer.js`, `staff.js`, `admin.js`, `app.js`
- Progressive Web App with `manifest.json` and service worker for offline support and home screen installation
- Retro pixel / arcade aesthetic using Press Start 2P font

**Backend**
- Supabase PostgreSQL database
- Supabase Edge Functions (Deno/TypeScript) for all write operations and protected reads
- Custom JWT signing and verification via `djwt`

**Infrastructure**
- GitHub Pages hosting
- Custom domain via DNS CNAME record
- GitHub Actions for CI/CD with secret injection

---

## How It Works

1. A customer creates an account with their name and phone number
2. The app generates a unique QR loyalty card tied to their account
3. At checkout, staff search by phone or scan the QR code
4. A stamp is added — the customer's card updates in real time
5. After 10 stamps, a free coffee reward is automatically created
6. Staff tap Redeem when the customer uses their reward

---

## What I Learned

This project pushed me well beyond a typical frontend demo. Key things I worked through:

- How to design a secure auth system without relying on a framework doing it for you — custom JWT signing, PIN hashing, brute force protection
- Why Supabase's built-in `auth.getUser()` won't work with custom-signed tokens, and how to use `djwt` to verify them manually in Edge Functions
- How Row Level Security works at the database level and how to use it as a security layer even without policies (service-role-only access)
- How to keep secrets out of a public GitHub Pages repo using GitHub Actions and placeholder substitution
- How PWAs work — manifest, service workers, caching strategies, and the difference between Android and iOS install behaviour
- How to structure a growing vanilla JS codebase into maintainable modules without a build tool

---

## Project Structure

```
Nook/
├── index.html          # All screens (SPA)
├── css/
│   └── styles.css
├── js/
│   ├── config.js       # Supabase URL + keys (injected at deploy)
│   ├── db.js           # Edge Function wrappers
│   ├── utils.js        # Shared UI helpers
│   ├── auth.js         # Customer sign in / out / PIN
│   ├── customer.js     # Customer screen renderers
│   ├── staff.js        # Staff screens + camera
│   ├── admin.js        # Admin screens
│   └── app.js          # Router + init
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── manifest.json       # PWA manifest
└── sw.js               # Service worker
```

---

## License

Built for educational and portfolio purposes. MIT License, see LICENSE file.
