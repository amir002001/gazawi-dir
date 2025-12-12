import { useState } from "react";
import WatermelonWalk from "./assets/watermelon-whistle-walk.svg";
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
    <div className="min-h-screen text-flag-black">
      <header className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 flex items-center w-full flex-col justify-center">
        <img src={WatermelonWalk} className="max-w-md"></img>
        <h1 className="text-6xl font-black leading-snug uppercase max-[768px]:text-2xl">
          Watermelon Pages
        </h1>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-flag-green/20 bg-white/80 p-4 shadow-soft">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-flag-black/70">
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
                    className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-red ${
                      isActive
                        ? "border-flag-red bg-flag-red text-white"
                        : "border-flag-green/30 bg-white text-flag-black hover:bg-flag-red/5"
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
