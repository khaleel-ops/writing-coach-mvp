# Deploy without a terminal

This guide gets the writing coach live on a public URL using only your browser. No `npm install`, no command line, no local Node setup. About 20–30 minutes start to finish.

You'll end up with a live URL like `writing-coach-mvp-yourname.vercel.app` that you can share with the first 20 users from the distribution plan.

## Before you start

### Rotate the API key

If you've shared your Anthropic key with anyone, anywhere — including in a chat — it is compromised. Treat it as public. Do this first:

1. Go to [console.anthropic.com](https://console.anthropic.com/) → API keys.
2. Find the leaked key. Click **Delete**.
3. Click **Create Key**. Give it a name like `writing-coach-prod`. Copy the new key somewhere safe (a password manager, not a chat).
4. The new key is the one you'll paste into Vercel in Step 4 below. Don't put it in any file.

### Accounts you'll need

Both free:

- A **GitHub** account — [github.com/signup](https://github.com/signup).
- A **Vercel** account — [vercel.com/signup](https://vercel.com/signup). Sign up *with* your GitHub account when prompted, which links them automatically.

## Step 1 — Get the project onto GitHub (10 min)

GitHub will host your code. Vercel needs it to be there in order to deploy.

1. **Find the project folder on your computer.** It's the `writing-coach-mvp` folder this session created. Open it in Finder (Mac) or File Explorer (Windows).
2. **Important — first, delete the `node_modules` folder if it exists inside `writing-coach-mvp`.** That folder is huge and you don't need to upload it. The `.gitignore` would normally exclude it, but the GitHub web uploader doesn't honor `.gitignore`, so deleting it manually is the simplest fix.
3. Go to [github.com/new](https://github.com/new).
4. Repository name: `writing-coach-mvp`. Set it to **Public** (Vercel's free plan needs public repos) or **Private** (works on free plan too, but with limits). Leave the rest blank. Click **Create repository**.
5. On the next page, you'll see "Quick setup" instructions. Look for the link that says **"uploading an existing file"** — click it.
6. Drag every file and folder *from inside* `writing-coach-mvp` (so: `app/`, `components/`, `lib/`, `package.json`, `README.md`, etc.) onto the GitHub upload area. **Do not** drag the parent `writing-coach-mvp` folder itself — drag its contents.
7. Scroll down. Add a commit message like "initial upload". Click **Commit changes**.
8. Wait for upload to finish. You should now see your files listed in the repo.

## Step 2 — Connect Vercel to the repo (5 min)

1. Go to [vercel.com/new](https://vercel.com/new).
2. You'll see a list of your GitHub repos. Find `writing-coach-mvp` and click **Import**.
3. If you don't see it, click **Adjust GitHub App Permissions** and give Vercel access to the repo, then come back.

## Step 3 — Configure the project (3 min)

Vercel will auto-detect that this is a Next.js project. You should see "Framework Preset: Next.js" pre-filled. Leave it.

**Do not click Deploy yet.** First:

1. Expand the **Environment Variables** section.
2. Add a variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste the *new* key you generated in the "Rotate" step above.
3. Click **Add**.
4. (Optional) Add a second variable: `ANTHROPIC_MODEL` = `claude-sonnet-4-5`. If you don't add this, the code defaults to the same value.

## Step 4 — Deploy (2 min)

1. Click **Deploy**.
2. Wait. Vercel installs dependencies, builds the project, and deploys. Takes about 90 seconds.
3. When done, you'll see a screen with confetti and a preview of your live site.
4. Click **Continue to Dashboard**. Your live URL is at the top — something like `writing-coach-mvp-abc123.vercel.app`.

## Step 5 — Test it (5 min)

1. Open the live URL in a new tab.
2. Scroll to the form. Paste 2–3 of your *own* recent emails into the sample slots. Use your real email. Submit.
3. Wait 20–40 seconds. The diagnostic should appear.
4. **Critical:** read it. Compare to `SAMPLE_DIAGNOSTIC.md` in this repo. Does it feel as sharp? If not, the next step is to iterate on `lib/diagnostic-prompt.ts` — instructions are in `METHODOLOGY.md`.

## Editing the prompt later (no terminal needed)

If the diagnostic isn't sharp enough and you want to iterate on the prompt:

1. Go to your repo on github.com.
2. Open `lib/diagnostic-prompt.ts`.
3. Click the pencil icon (top right) to edit in the browser.
4. Make your changes.
5. Scroll down. Add a commit message like "tighten hedging detection". Click **Commit changes**.
6. Vercel sees the new commit and auto-deploys within ~90 seconds. No further action.

This is the fastest possible product-iteration loop: edit the file in GitHub, wait 90 seconds, refresh the live site, run another diagnostic.

## Custom domain (optional, $12/year)

Once the live URL is working and you want a real domain like `writingcoach.dev`:

1. Buy the domain from [namecheap.com](https://www.namecheap.com/) or [porkbun.com](https://porkbun.com).
2. In Vercel: Project → Settings → Domains → Add your domain.
3. Vercel shows you the DNS records to add at your registrar. Add them. Wait 10 minutes for propagation.

Don't do this until the live URL is producing diagnostics you'd be proud to share.

## If something breaks

**Build fails on Vercel.** Click into the failed deployment to see logs. Most common cause: a file didn't upload to GitHub (open the repo, check that `app/`, `components/`, `lib/`, `package.json` all made it).

**Form submits but you get an error message.** The API key is wrong or missing. Go to Vercel → Settings → Environment Variables. Confirm `ANTHROPIC_API_KEY` is set and starts with `sk-ant-`. If you change it, redeploy via Deployments → ⋯ → Redeploy.

**Diagnostic generates but is generic / not sharp.** This is a prompt problem, not a deployment problem. Edit `lib/diagnostic-prompt.ts` on GitHub and let Vercel redeploy.

**The site is slow.** First request can take 30–50 seconds because the Anthropic API call is slow. That's normal. Subsequent requests are the same speed — there's no caching to fix.

## What this gets you

A live, public URL that:

- Accepts pasted emails and returns a diagnostic.
- Runs entirely on Vercel's free tier (the only cost is the Anthropic API — under $0.05 per diagnostic).
- Updates automatically every time you edit a file on GitHub.

That's the entire product for Step 1 of the build plan. The rest is distribution — `DISTRIBUTION.md` has the playbook.
