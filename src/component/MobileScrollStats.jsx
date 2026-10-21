// MobileScrollStats.jsx

const statistics = [
  {
    number: "100",
    heading: "More than",
    description: "distribution points",
  },
  {
    number: "25",
    heading: "million tonnes",
    description: "The Group's production capacity",
  },
  {
    number: "100+",
    heading: "Integrated",
    description: "business solutions",
  },
];

export default function MobileScrollStats() {
  return (
    <section className="block bg-white py-12 md:hidden">
      <div className="mb-6 px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
          Uralchem in numbers
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Swipe to explore <span aria-hidden="true">→</span>
        </p>
      </div>

      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-5"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {statistics.map((stat) => (
          <article
            key={stat.number}
            className="flex min-h-[260px] w-[82vw] max-w-[340px] shrink-0 snap-center flex-col justify-between border border-neutral-200 bg-neutral-50 p-6"
          >
            <div>
              <span className="block text-[clamp(5rem,22vw,7rem)] font-black leading-[0.85] tracking-[-0.08em] text-emerald-600">
                {stat.number}
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold leading-tight text-neutral-900">
                {stat.heading}
              </h2>
              <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-neutral-600">
                {stat.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-1 flex justify-center gap-2" aria-hidden="true">
        {statistics.map((stat, index) => (
          <span
            key={stat.number}
            className={`h-1 rounded-full ${
              index === 0 ? "w-8 bg-emerald-600" : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}