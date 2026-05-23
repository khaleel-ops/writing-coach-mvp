import { CoachForm } from "@/components/CoachForm";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-5 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Writing coach
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">
          See the two patterns weakening your emails
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Paste three emails you sent this week. In about a minute you&apos;ll get a
          diagnostic with quoted lines from your writing and one five-minute drill.
        </p>
      </header>

      <CoachForm />
    </main>
  );
}
