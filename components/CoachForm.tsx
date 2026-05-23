"use client";

import { useState } from "react";
import { DiagnosticDisplay } from "@/components/DiagnosticDisplay";

const PLACEHOLDERS = [
  "Paste a real email you sent — to your manager, a client, a teammate…",
  "Second email — different situation if you can.",
  "Third email — the more variety, the sharper the diagnostic.",
];

export function CoachForm() {
  const [name, setName] = useState("");
  const [emails, setEmails] = useState(["", "", ""]);
  const [diagnostic, setDiagnostic] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function updateEmail(index: number, value: string) {
    setEmails((prev) => {
      const next = [...prev] as [string, string, string];
      next[index] = value;
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setDiagnostic(null);
    setLoading(true);

    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() || undefined, emails }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setDiagnostic(data.diagnostic);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (diagnostic) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setDiagnostic(null)}
          className="mb-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          ← Run another diagnostic
        </button>
        <DiagnosticDisplay markdown={diagnostic} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Your first name <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sam"
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none ring-accent/30 focus:ring-2"
        />
      </div>

      {emails.map((email, index) => (
        <div key={index}>
          <label htmlFor={`email-${index}`} className="mb-2 block text-sm font-medium">
            Email {index + 1}
          </label>
          <textarea
            id={`email-${index}`}
            required
            rows={6}
            value={email}
            onChange={(e) => updateEmail(index, e.target.value)}
            placeholder={PLACEHOLDERS[index]}
            className="w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none ring-accent/30 focus:ring-2"
          />
        </div>
      ))}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-ink px-6 py-4 text-base font-medium text-paper transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Reading your emails…" : "Get my diagnostic"}
      </button>

      <p className="text-center text-xs text-muted">
        Your emails are sent to Anthropic for analysis and are not stored.
      </p>
    </form>
  );
}
