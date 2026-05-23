# Distribution plan: first 20 users

The goal here isn't usage. It's *signal*. We want 20 people from the target segment to receive the diagnostic so we can answer one question:

> Does the diagnostic feel sharp enough that recipients ask for another one or forward it to a colleague?

If the answer is yes, Step 2 of the build plan is worth doing. If the answer is no, we stop and fix the diagnostic before writing more code.

Optimize for *quality of feedback*, not number of submissions. Twenty thoughtful target users beats 200 random people.

## Target user

A reminder of who we're testing on, in priority order:

1. **Early-career professionals (1-5 years in)** at tech, consulting, finance, or agency firms. Analysts, associates, junior PMs, account managers.
2. **Non-native English speakers in professional roles** — pain is more acute, willingness to pay higher.
3. Avoid for now: senior executives, students, generic "I write a lot."

## Warm distribution (first 5-10 users)

Goal: get to ~10 submissions from people who will give you honest feedback because they know you. These conversations are worth 10x the cold ones.

### Who to message

Open your phone and LinkedIn contacts. Look for anyone who:

- Is 1-5 years into a white-collar job.
- Has mentioned writing emails, decks, briefs, or "professional communication" in any past conversation.
- Has complained about ChatGPT making their writing generic, or about feeling unsure about their own writing.
- Is a non-native English speaker working in English-language environments.

Aim for 15 messages → expect 5-8 to actually try it.

### Message script (DM / WhatsApp / text)

Pick one of these two, depending on the relationship:

**A. The honest version (best for close contacts):**

> Hey [name] — building something small and want your reaction.
>
> It's a free 60-second writing diagnostic. You paste 3 emails you sent this week, and a coach names the two patterns weakening your writing (with quoted lines from your own emails) plus one 5-min drill.
>
> Trying it on people 1-5 years in. Would you spend 5 minutes on this and tell me if it felt sharp or generic? [link]

**B. The curiosity version (best for warmer-but-not-close contacts):**

> Hey — random one. Built a free tool that reads 3 emails you sent and tells you the two patterns weakening your writing, using your actual lines as evidence. Curious whether it nails it for you or feels generic.
>
> Should take ~5 min total: [link]

### What to ask after they try it

Don't ask "what did you think?" — that produces polite junk. Ask:

1. "Did the diagnostic name a pattern you knew about but couldn't put words to?" (Looking for: yes, with specifics.)
2. "Was anything in it wrong, or generic enough that it could've been about anyone?" (Looking for: candid critiques.)
3. "Would you forward this to a friend? Be honest — would you actually send it, not just say you would." (The forward signal is the demand signal.)
4. "If next week I sent you a new diagnostic on 3 new emails, would you read it?" (Repeat-use signal.)

Write the responses down. Patterns across 5 people will tell you what to fix in the prompt.

## Cold distribution (next 10-15 users)

Once you've adjusted the prompt based on warm feedback, expand to cold.

### Where to find them

In rough order of fit:

1. **LinkedIn DMs.** Search for "Analyst" / "Associate" / "Product Manager" at tech / consulting / finance firms, 1-5 years post-grad. ~50 DMs to get 10 trials. Use this template:

   > Hey [name] — I'm beta-testing a free 60-second writing diagnostic for early-career professionals (it points out the two patterns weakening your writing using your actual emails as evidence). Looking for 10 honest reviews this week. Open to giving it a try? [link]

   Personalize the first sentence with something specific about their profile — a recent post, a role detail. Generic "I noticed you work in..." messages get ignored.

2. **Reddit.** r/ProductManagement, r/consulting, r/FinancialCareers, r/ENGLISH (for non-native speakers). Don't drop the link cold — comment helpfully on threads about communication / writing / "sounding senior" for a week first, then mention the tool when relevant.

3. **Slack and Discord communities.** Reforge, On Deck, Lenny's Newsletter Slack, Product Coalition, Mind the Product. Read the community rules first. Most allow "I'm building X, looking for feedback" posts in dedicated channels. Do NOT post the link in general channels — that's spam.

4. **Twitter/X.** Reply to threads where junior professionals talk about communication anxiety, ChatGPT dependence, or wanting to sound more senior. Don't pitch — offer the diagnostic specifically when it would actually help.

5. **University career centers / new-grad listservs.** If you have alumni access, the recent-graduate audience is exactly the target.

### Goal

15 cold DMs + 3-5 community posts → expect 10-15 trials → expect 3-5 of those to give meaningful feedback.

## Tracking

A simple Google Sheet is enough. Columns:

| Date | Name | How they found it | Warm/Cold | Submitted? | Feedback summary | Asked for another? | Forwarded? |

The two columns that matter are the last two. Everything else is noise. After 20 users, count the rows where "asked for another" or "forwarded" is yes. That's your demand signal.

Rough decision thresholds:

- 8+ yeses out of 20 → strong signal, build Step 2.
- 4-7 → fix the prompt, do another 20.
- 0-3 → the methodology isn't there yet; revisit before building anything else.

## Things not to do

- Don't run paid ads. You'll get bad traffic and confuse the signal.
- Don't post on Product Hunt yet. PH is for products with a polished story, not for demand testing.
- Don't run it for senior executives. Their writing is already good and the diagnostic won't impress them.
- Don't ask people to retweet / share for visibility. You want signal, not vanity metrics.
- Don't keep building features while you're distributing. Distribution and feedback first, building second.

## What "success" looks like for this stage

A single screenshot of someone forwarding the diagnostic to a friend with a comment like "this is actually really sharp" is worth more than 100 submissions. That's the artifact you're hunting for. When you have three of those screenshots, you have a product worth building further.
