# Sample diagnostic

This is what the engine produces for a typical early-career professional. Use it as:

- A north star when evaluating the live model's output ("does my diagnostic feel as sharp as this?").
- A teaser you can paste into LinkedIn DMs and Twitter when sourcing your first 20 users ("here's what you get back — want one for your own writing?").

The three input emails were realistic ones from a junior PM at a SaaS company.

---

## Your writing diagnostic

**Sam, here's what I'm seeing.**

You write like someone who's been told "be polite, don't take up space" and absorbed it as a personality. Your messages have ideas in them — sometimes good ones — but the ideas are buried under so much padding that the reader has to dig. There's a sharper, more confident version of you on the other side of two specific habits.

---

### 1. The Apologetic Opener

You start nearly every message bracing the reader for something difficult. It signals that you don't believe what you're about to say is worth their time — and then they treat it that way.

> *"Sorry to bother you with this, but I was just wondering if there's any chance we could maybe push our 1:1 to next week?"*
> The first three words give the reader permission to deprioritize you. The "maybe" makes it worse.

> *"Hope you're doing well!"* / *"Hope all is well."*
> Filler greeting in both emails. Not wrong — but combined with the apology, every message starts with 8 words before the actual point.

**The fix.** Open with the request itself. Politeness is what comes *after* the ask, not before.

---

### 2. The Buried Lead

Your most important sentence is consistently the second-to-last one. The reader has to swim through three paragraphs of context before learning what you actually need from them.

> *"There's been a lot of moving pieces... Design has been iterating... The user research came back... Anyway, the main thing is that we're going to need to push the launch back by two weeks."*
> The actual news — a two-week slip — is sentence number six. Most readers won't get there.

> *"I think there's a real opportunity for us to leverage some of the synergies between our teams and align on a path forward."*
> This is supposed to be a meeting request. It takes 24 words before "set up some time" even appears.

**The fix.** Write the message, then move the most important sentence to the top. Everything else is context that supports it.

---

### Today's drill — 5 minutes

**The Two-Sentence Email.**

You're going to rewrite one of your real emails using exactly two sentences. The first sentence is the ask. The second sentence is the one piece of context the reader actually needs.

1. Open your sent folder. Find the longest email you sent this week.
2. Identify the one sentence in it that contains the actual ask or news. Move it to the top.
3. Pick the single most important piece of context. Make it the second sentence.
4. Delete everything else. Yes, all of it.
5. Read the result out loud. If it sounds rude, you've calibrated to the wrong baseline — senior writers sound exactly this direct.

You will not send this version. The point is to feel how much was filler.

---

**Next week:** Send me 3 new emails — one of them written using the two-sentence rule before you padded it back out. I'll tell you whether the rule is sticking.

---

## Notes for the founder

When the live model runs, expect outputs that:

- Quote the user's words *exactly* — verbatim, with the same punctuation. If the model paraphrases, fix the prompt.
- Pick two patterns from the library, never more.
- Always include a five-minute drill the user could do right now with an existing email.
- Read like a sharp coach, not a robot or a corporate trainer.

If a real diagnostic doesn't clear that bar, the prompt in `lib/diagnostic-prompt.ts` is the thing to edit.
