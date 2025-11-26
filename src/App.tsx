import { BusinessCard } from "./components/BusinessCard";
import { businesses } from "./data/businesses";

function App() {
  return (
    <div className="min-h-screen bg-page text-flag-charcoal">
      <div className="relative isolate overflow-hidden bg-hero-gradient pb-24 pt-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <header className="space-y-6">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              Gazawi family businesses
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              A living directory of Gazawi resilience.
            </h1>
            <p className="max-w-3xl text-base text-white/85 sm:text-lg">
              Every card below represents a family who is rebuilding life
              through craft, food, design, and service. We are framing their
              businesses with dignity, celebrating the roots they carry from
              Gaza, and pairing each listing with the family story that keeps
              those roots nourished.
            </p>
          </header>

          <div className="grid gap-8 rounded-3xl bg-white/10 p-6 text-sm text-white/90 backdrop-blur">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-4xl font-black">{businesses.length}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Businesses catalogued
                </p>
              </div>
              <div className="h-12 w-px bg-white/20" aria-hidden />
              <p className="max-w-xl text-base">
                Stories are being added collaboratively with each family.
                Placeholders help lock in the pacing now, and we will enrich
                every card together.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-page" />
        <div
          className="pal-pattern pointer-events-none absolute inset-0 opacity-20"
          aria-hidden
        />
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-flag-charcoal/60">
              Directory
            </p>
            <h2 className="text-3xl font-bold text-flag-charcoal">
              Families we are spotlighting
            </h2>
            <p className="mt-2 max-w-3xl text-base text-flag-charcoal/80">
              Each profile pairs practical details—how to reach them, what they
              offer—with a personal story framing why their work matters. Hover
              or tap a card to feel the subtle cues inspired by the Palestinian
              flag.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {businesses.map((business) => (
              <BusinessCard key={business.id} profile={business} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
