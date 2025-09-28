export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">About Carys</h1>
      <div className="rounded-2xl bg-white p-6 shadow-soft border space-y-3">
        <p>
          Carys (Conversational Assistant Responsive Yielding Solutions) is built on a modern Transformer
          stack featuring encoder–decoder and self‑attention. It integrates real‑time search, image and
          video generation stubs, and a polished UX that mirrors best‑in‑class assistants.
        </p>
        <p>
          Why choose Carys? A refined, reliable interface; thoughtful defaults; and pricing that works for
          everyone — Free, Pro (£9.99), and Expert (£19.99).
        </p>
      </div>
    </div>
  );
}