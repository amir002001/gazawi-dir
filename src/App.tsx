import { useState } from "react";
import { BusinessCard } from "./components/BusinessCard";
import { businesses } from "./data/businesses";

const categoryOptions = Array.from(
  new Set(businesses.map((business) => business.category))
).sort();

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredBusinesses =
    selectedCategory === "all"
      ? businesses
      : businesses.filter((business) => business.category === selectedCategory);

  return (
    <div className="min-h-screen bg-page text-flag-charcoal">
      <section className="relative overflow-hidden border-b border-flag-sand/40 bg-linear-to-b from-flag-cream via-flag-cream to-flag-green/10 pb-16 pt-14">
        <div
          className="pointer-events-none absolute inset-0 pal-pattern opacity-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 fiber-paper opacity-70 mix-blend-soft-light"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <header className="space-y-5">
            <p className="inline-flex w-fit items-center gap-2 rounded-md bg-flag-green/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-flag-cream">
              From Gaza, with care
            </p>
            <h1 className="text-4xl font-black leading-snug text-flag-charcoal sm:text-5xl">
              Holding space for Gazawi families doing business with heart.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-flag-charcoal/85 sm:text-lg">
              This directory is meant to feel like gathering in someone’s living
              room: shoes off, tea poured, stories offered with tenderness. Each
              listing will soon carry a family’s voice alongside the details you
              need to support them.
            </p>
          </header>

          <div className="grid gap-4 rounded-2xl border border-flag-green/30 bg-flag-green/10 p-6 shadow-soft sm:grid-cols-3">
            <div>
              <p className="text-4xl font-black text-flag-green">
                {filteredBusinesses.length}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-flag-charcoal/70">
                Families listed
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm leading-relaxed text-flag-charcoal/80">
                We are writing each story shoulder-to-shoulder with the
                families. Placeholders keep the rhythm of the page steady until
                every paragraph is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-flag-sand/50 bg-white/85 p-6 shadow-soft">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-flag-green">
              Directory
            </p>
            <h2 className="mt-2 text-3xl font-bold text-flag-charcoal">
              Families we are spotlighting
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-flag-charcoal/80">
              Browse the cards below like you would leaf through a keepsake box.
              Contact details sit beside memories, recipes, and craft notes—all
              of it grounded in Palestine’s colors and care.
            </p>
          </div>

          <div className="rounded-2xl border border-flag-green/20 bg-white/80 p-4 shadow-soft">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-flag-charcoal/70">
              Filter by craft
            </p>
            <div className="flex flex-wrap gap-2">
              {["all", ...categoryOptions].map((option) => {
                const isActive = selectedCategory === option;
                const label = option === "all" ? "All families" : option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedCategory(option)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-green ${
                      isActive
                        ? "border-flag-green bg-flag-green text-flag-cream"
                        : "border-flag-green/30 bg-white text-flag-charcoal/80 hover:bg-flag-green/10"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} profile={business} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
