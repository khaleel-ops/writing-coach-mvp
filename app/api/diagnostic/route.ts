import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { buildDiagnosticPrompt } from "@/lib/diagnostic-prompt";
import type { DiagnosticRequest } from "@/lib/types";

const MIN_EMAIL_LENGTH = 40;

function validateBody(body: unknown): DiagnosticRequest | string {
  if (!body || typeof body !== "object") {
    return "Invalid request body.";
  }

  const { name, emails } = body as Record<string, unknown>;

  if (!Array.isArray(emails) || emails.length !== 3) {
    return "Please provide exactly three emails.";
  }

  const trimmed = emails.map((e) => (typeof e === "string" ? e.trim() : ""));

  if (trimmed.some((e) => e.length < MIN_EMAIL_LENGTH)) {
    return "Each email should be at least a few sentences so we can find real patterns.";
  }

  return {
    name: typeof name === "string" ? name : undefined,
    emails: trimmed as [string, string, string],
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing ANTHROPIC_API_KEY. Add it in Vercel environment variables." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const validated = validateBody(body);
  if (typeof validated === "string") {
    return NextResponse.json({ error: validated }, { status: 400 });
  }

  const model = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-5";
  const client = new Anthropic({ apiKey });

  try {
    const message = await client.messages.create({
      model,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: buildDiagnosticPrompt(validated.emails, validated.name),
        },
      ],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json(
        { error: "The model returned an empty response. Try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ diagnostic: textBlock.text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong generating your diagnostic.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
