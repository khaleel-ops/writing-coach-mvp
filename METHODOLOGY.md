# Diagnostic methodology

This is the playbook the writing coach is built around. Iterating on the product is mostly iterating on this document — the model only does what the prompt instructs.

## What we are trying to produce

A one-page diagnostic that a recipient would forward to a colleague.

That's the entire bar. If the diagnostic is sharp enough that the user shows it to someone, the product has demand. If it isn't, no amount of subsequent feature work matters.

To clear that bar the diagnostic must:

1. Quote the user's own words back to them. The single biggest difference between this product and ChatGPT is that we name the pattern *and* show where it shows up in the user's actual writing. Quoted feedback is what makes the diagnostic feel earned.
2. Pick two patterns, not five. Five is overwhelming. Two is something a human can hold in their head and act on this week.
3. End with one drill the user can do in five minutes. Behavior, not knowledge. We're trying to make the user *do* something different on the next email they send.

## The pattern library

The model is given a list of common professional-writing patterns to look for. These are the ones we've decided matter most for early-career professionals:

- **Buried lead** — the most important sentence is in paragraph three.
- **Hedging** — `just`, `maybe`, `I think`, `kind of`, `I'm not sure but`.
- **Vague ask** — no clear next step, decision, or deadline.
- **Apologetic openers** — `Sorry to bother you`, `Hope this isn't a stupid question`.
- **Passive voice evasion** — passive used to dodge ownership.
- **Corporate jargon** — `circle back`, `touch base`, `synergy`, `let's align`.
- **Wall of text** — no paragraph breaks.
- **Context dumping** — paragraphs of background before the point.
- **Trailing CTAs** — `let me know your thoughts and feel free to reach out anytime`.
- **Compliment sandwich** — positive-negative-positive obscures the real message.
- **Tone mismatch** — wrong register for the relationship.
- **Lack of specificity** — missing numbers, dates, names, owners.
- **Over-explanation** — justifying yourself when you don't need to.
- **Weak verbs** — `make changes to`, `do an analysis of`, `have a conversation about`.

This list will grow. Each time we read a diagnostic that misses something important, we add the new pattern here and update the prompt.

## What the diagnostic is not

It is not a grammar check. Grammarly does that. It is not a rewrite — the entire point is that the user does the work themselves. It is not a list of every flaw, only the two most pressing. It is not gentle — politeness reads as filler. It is not generic — every line should feel like it could only be about this person.

## How to evaluate a diagnostic

After every batch of diagnostics, score them on these:

1. **Quote authenticity.** Are the quoted lines actually verbatim from the samples? (Spot check; the model is instructed to quote verbatim but can drift.)
2. **Pattern accuracy.** When you read the samples yourself, do the chosen patterns feel like the *right* two? Or did the model pick something easy and miss something more important?
3. **Drill specificity.** Is the drill something you could do in five minutes, or is it a chore disguised as a drill?
4. **Forward-worthiness.** Imagine you received this diagnostic. Would you screenshot it and send it to a friend? If not, why not?

The first 20 diagnostics should be reviewed by hand before being sent to users. Calibration takes longer than building the prompt.

## What we are deliberately not building yet

- Multi-user accounts. Users get the diagnostic and leave. We'll add accounts when the second-touch product (the drill series) exists.
- Email sending infrastructure. The diagnostic shows in-browser. We'll add `Resend` or `SendGrid` once we want to deliver follow-up drills weekly.
- Database. Submissions are processed in memory and the diagnostic is rendered once. Adding persistence requires Postgres + Auth and earns us very little for the test we're running.
- Manager dashboards. Only relevant once 10+ teams have asked.
