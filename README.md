# Makstribe Consult Ltd — Website

A one-page marketing site built with **Next.js 16**, **TypeScript** and **Tailwind CSS**, with animations by Framer Motion and a contact form powered by EmailJS.

Live target: **https://makstribeconsult.com**

---

## Table of contents

1. [Install the tools you need](#1-install-the-tools-you-need)
2. [Run the site on your computer](#2-run-the-site-on-your-computer)
3. [Set up EmailJS (contact form)](#3-set-up-emailjs-contact-form)
4. [Test the form locally](#4-test-the-form-locally)
5. [Put the code on GitHub](#5-put-the-code-on-github)
6. [Deploy to Vercel](#6-deploy-to-vercel)
7. [Buy makstribeconsult.com](#7-buy-makstribeconsultcom)
8. [Connect the domain to Vercel](#8-connect-the-domain-to-vercel)
9. [Go-live checklist](#9-go-live-checklist)
10. [Making changes later](#10-making-changes-later)
11. [Troubleshooting](#11-troubleshooting)
12. [Project structure](#12-project-structure)

---

## 1. Install the tools you need

Install these three things once. Restart your computer afterwards.

| Tool | Where | Why |
|---|---|---|
| **Node.js 20 LTS or newer** | https://nodejs.org (download the **LTS** button) | Runs the website on your computer |
| **Git** | https://git-scm.com/downloads | Sends your code to GitHub |
| **VS Code** | https://code.visualstudio.com | The editor you write code in |

Check they installed correctly. Open **Terminal** (macOS) or **PowerShell** (Windows) and run:

```bash
node -v
npm -v
git -v
```

You should see version numbers such as `v20.x.x`, `10.x.x`, `2.4x.x`. If a command says "not found", reinstall that tool and reopen the terminal.

Then tell Git who you are (once, ever):

```bash
git config --global user.name "Your Name"
git config --global user.email "makstribebusiness@gmail.com"
```

---

## 2. Run the site on your computer

1. Unzip the project folder and put it somewhere you'll remember, e.g. `Documents/makstribe-consult`.
2. Open **VS Code** → `File` → `Open Folder…` → pick the `makstribe-consult` folder.
3. In VS Code open the terminal: `Terminal` → `New Terminal`.
4. Install the packages (one time, takes 1–2 minutes):

```bash
npm install
```

5. Start the site:

```bash
npm run dev
```

6. Open **http://localhost:3000** in your browser. The site is now running.

Leave that terminal running while you work. Every time you save a file, the browser updates itself.

To stop the server: click in the terminal and press `Ctrl + C`.

---

## 3. Set up EmailJS (contact form)

EmailJS lets the website send you an email without a backend server. The free plan allows 200 emails/month.

### 3a. Create the account and connect Gmail

1. Go to https://www.emailjs.com and sign up using **makstribebusiness@gmail.com**.
2. Verify your email address.
3. In the dashboard, go to **Email Services** → **Add New Service** → choose **Gmail**.
4. Click **Connect Account**, sign in with **makstribebusiness@gmail.com**, and allow access.
5. Click **Create Service**.
6. Copy the **Service ID** (looks like `service_ab12cde`). Keep it in a note.

### 3b. Create the email template

1. Go to **Email Templates** → **Create New Template**.
2. Fill in the settings tab exactly like this:

| Field | Value |
|---|---|
| To Email | `makstribebusiness@gmail.com` |
| From Name | `Makstribe Website` |
| Reply To | `{{reply_to}}` |
| Subject | `New project enquiry — {{service}}` |

3. In the **Content** tab, delete the sample content and paste this:

```
You have a new project enquiry from makstribeconsult.com

Name:    {{from_name}}
Email:   {{reply_to}}
Service: {{service}}

Message:
{{message}}
```

4. Click **Save**.
5. Copy the **Template ID** (looks like `template_xy34fgh`).

> The double curly braces are placeholders. The website fills them in. The names must match exactly: `from_name`, `reply_to`, `service`, `message`.

### 3c. Get your Public Key

1. Go to **Account** → **General**.
2. Copy the **Public Key** (a short random string).

### 3d. Put the three values into the project

In VS Code, create a new file in the top level of the project called exactly:

```
.env.local
```

Paste this in and replace the placeholder values with your three real IDs:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ab12cde
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xy34fgh
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Save the file. **Stop the dev server (`Ctrl + C`) and run `npm run dev` again** — environment variables are only read at startup.

> `.env.local` is deliberately excluded from Git, so your keys never get uploaded to GitHub. You'll add the same three values to Vercel later in step 6.

### 3e. Lock the key to your domain (do this after step 8)

The public key is safe to expose, but you should still stop other websites using your quota. In EmailJS go to **Account** → **Security** and add these allowed origins:

```
https://makstribeconsult.com
https://www.makstribeconsult.com
http://localhost:3000
```

---

## 4. Test the form locally

1. With `npm run dev` running, open http://localhost:3000.
2. Scroll to **Start a project**, fill in the form and click **Send message**.
3. You should see a green "Message sent" panel, and an email should arrive at makstribebusiness@gmail.com within a minute (check Spam the first time).

If you see an error instead, jump to [Troubleshooting](#11-troubleshooting).

---

## 5. Put the code on GitHub

### 5a. Create an empty repository

1. Sign up / log in at https://github.com.
2. Click the **+** in the top right → **New repository**.
3. Repository name: `makstribe-consult`
4. Set it to **Private** (recommended).
5. **Do not** tick "Add a README", "Add .gitignore" or "Choose a license" — the project already has them.
6. Click **Create repository**. Leave the page open.

### 5b. Upload your code

Back in the VS Code terminal, inside the project folder, run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial commit: Makstribe Consult website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/makstribe-consult.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. GitHub will ask you to sign in — a browser window opens, approve it.

Refresh the GitHub page. Your files should be there. Confirm that `.env.local` is **not** listed — that's correct and intentional.

---

## 6. Deploy to Vercel

1. Go to https://vercel.com and click **Sign Up** → **Continue with GitHub**.
2. Authorise Vercel to access your GitHub account.
3. On the dashboard click **Add New…** → **Project**.
4. Find `makstribe-consult` in the list and click **Import**.
5. Leave Framework Preset as **Next.js** and all build settings at their defaults.
6. Expand **Environment Variables** and add all three, one at a time:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | your service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | your template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | your public key |

7. Click **Deploy**. Wait 1–2 minutes.
8. You'll get a temporary URL like `makstribe-consult.vercel.app`. Open it and check the site works, including the contact form.

> If you ever change an environment variable in Vercel, go to **Deployments** → the latest one → **⋯** → **Redeploy** for it to take effect.

---

## 7. Buy makstribeconsult.com

You have two options. **Option A is far easier for a first-timer.**

### Option A — Buy through Vercel (recommended)

1. In your Vercel project, go to **Settings** → **Domains**.
2. Type `makstribeconsult.com` and click **Add**.
3. If it's available, Vercel offers to sell it to you (~$15–20/year). Pay for it there.
4. Done — DNS is configured automatically. Skip step 8 entirely.

### Option B — Buy from a registrar

Good registrars: **Namecheap**, **Porkbun**, **Cloudflare Registrar**, **GoDaddy**.

1. Search for `makstribeconsult.com`, add to cart, buy it.
2. **Turn off** any "web hosting", "website builder" or "email hosting" upsells — you don't need them.
3. Keep **WHOIS privacy** on (usually free).
4. Then follow step 8.

---

## 8. Connect the domain to Vercel

Only needed if you bought the domain elsewhere (Option B).

### 8a. Add the domain in Vercel

1. Vercel project → **Settings** → **Domains**.
2. Enter `makstribeconsult.com` → **Add**.
3. Vercel shows you the exact DNS records to create. **Always use the values Vercel shows you on screen** — they are the source of truth. They will look like this:

| Type | Name / Host | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

### 8b. Add those records at your registrar

1. Log in to your registrar and find **DNS** / **Advanced DNS** / **Manage DNS** for your domain.
2. Delete any default "parking" or placeholder A / CNAME records.
3. Add the two records from the table above exactly as shown.
4. Save.

### 8c. Wait

DNS changes take anywhere from 10 minutes to a few hours (occasionally up to 24). Vercel's Domains page shows a green **Valid Configuration** tick when it's ready, and issues an HTTPS certificate automatically.

Set `makstribeconsult.com` as the **Primary Domain** in Vercel so `www.makstribeconsult.com` redirects to it.

---

## 9. Go-live checklist

- [ ] https://makstribeconsult.com loads with a padlock (HTTPS)
- [ ] www version redirects to the non-www version
- [ ] Every nav link scrolls to the right section
- [ ] Contact form sends and the email arrives at makstribebusiness@gmail.com
- [ ] The reply-to address on the received email is the visitor's address
- [ ] EmailJS allowed origins are set (step 3e)
- [ ] Site looks right on your phone
- [ ] Paste the URL into https://www.opengraph.xyz to check the social preview image
- [ ] Submit the site at https://search.google.com/search-console (add property → Domain → follow the TXT record instructions) so Google can index it

---

## 10. Making changes later

All the text lives in one file: **`src/lib/site.ts`**. Change service names, descriptions, bullet points, the process steps and contact details there without touching any layout code.

The workflow for any change:

```bash
npm run dev          # see your change live at localhost:3000
```

When you're happy:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Vercel automatically rebuilds and publishes within about a minute. That's it — you never need to re-upload anything.

**Where things are:**

| I want to change… | Open this file |
|---|---|
| Any wording, services, process steps | `src/lib/site.ts` |
| Colours | `tailwind.config.ts` (the `colors` block) |
| Fonts | `src/app/layout.tsx` |
| Hero headline & stats | `src/components/Hero.tsx` |
| The dark card in the hero | `src/components/ScopeCard.tsx` |
| Contact form fields / behaviour | `src/components/Contact.tsx` |
| Page title & SEO description | `src/app/layout.tsx` |
| Social share image | replace `public/og.png` (1200×630) |
| Favicon | replace `src/app/icon.svg` |

---

## 11. Troubleshooting

**`npm install` fails**
Make sure you're inside the project folder (the one containing `package.json`). Run `pwd` (macOS) or `cd` (Windows) to check.

**Port 3000 already in use**
Run `npm run dev -- -p 3001` and use http://localhost:3001.

**Form says "Email is not configured yet"**
`.env.local` is missing, misspelled, or the dev server wasn't restarted after creating it. The file must sit next to `package.json`, and variable names must start with `NEXT_PUBLIC_`.

**Form says "That did not send"**
- Check the three IDs are correct with no extra spaces.
- Check the EmailJS template's To Email is `makstribebusiness@gmail.com`.
- On the live site, check Account → Security allowed origins includes your domain.
- Open the browser console (F12 → Console) — EmailJS prints the reason there.

**Emails go to spam**
Mark the first one "Not spam". This settles after a few messages.

**Vercel build fails**
Open the failed deployment and read the log. Ninety percent of the time it's a typo in a file you just edited. Run `npm run build` locally first — if it passes locally, it will pass on Vercel.

**Domain still not working after 24 hours**
Re-check the DNS records match what Vercel shows character for character, and that you deleted the registrar's default parking records.

---

## 12. Project structure

```
makstribe-consult/
├── .env.local              ← you create this (never committed)
├── .env.local.example      ← template showing which keys are needed
├── .gitignore
├── next.config.mjs
├── package.json            ← dependencies and scripts
├── postcss.config.mjs
├── tailwind.config.ts      ← colours, fonts, custom animations
├── tsconfig.json
├── public/
│   └── og.png              ← social share preview image
└── src/
    ├── app/
    │   ├── globals.css     ← base styles + reusable classes
    │   ├── icon.svg        ← favicon
    │   ├── layout.tsx      ← fonts, SEO metadata, page shell
    │   ├── page.tsx        ← assembles the sections in order
    │   ├── robots.ts       ← auto-generates /robots.txt
    │   └── sitemap.ts      ← auto-generates /sitemap.xml
    ├── components/
    │   ├── Header.tsx      ← sticky nav + mobile menu
    │   ├── Hero.tsx        ← headline, stats, CTAs
    │   ├── ScopeCard.tsx   ← the animated "statement of work" card
    │   ├── Services.tsx    ← five service cards + "not sure" card
    │   ├── Process.tsx     ← four-step process
    │   ├── About.tsx       ← dark section with principles
    │   ├── Contact.tsx     ← EmailJS form
    │   ├── Footer.tsx
    │   ├── ScrollProgress.tsx
    │   └── ui/
    │       ├── AnimatedHeading.tsx  ← word-by-word headline reveal
    │       ├── CTAButton.tsx
    │       ├── Eyebrow.tsx
    │       ├── Reveal.tsx           ← scroll-triggered fade-up
    │       └── Wordmark.tsx
    └── lib/
        └── site.ts         ← ALL website copy lives here
```

---

## Commands reference

```bash
npm install     # install dependencies (first time only)
npm run dev     # develop locally at http://localhost:3000
npm run build   # production build — run before pushing if unsure
npm start       # preview the production build locally
```
