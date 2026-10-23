// src/App.jsx

export default function FeaturedProducts() {
  return (
    <main className="min-h-screen bg-white px-5 pt-26 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        {/* Hero Banner */}
        <div className="flex min-h-[184px] items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-700 px-6 py-10 text-center sm:px-12">
          <h1 className="max-w-5xl text-2xl font-bold leading-[1.08] tracking-tight text-white sm:text-3xl md:text-4xl">
            Agronova Kazakhstan is a leading producer of industrial
            chemicals and mineral fertilisers
          </h1>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              Agronova Kazakhstan is one of the largest producers of mineral
              fertilisers and chemical raw materials in Kazakhstan.
              We develop and manufacture products based on the latest global
              trends.
            </p>

            <p>
              Agronova Group offers industrial chemicals for various
              industries including chemicals, construction, mining,
              metalworking, oil &amp; gas, and others.
            </p>

            <p>
              We collaborate with R&amp;D centres, utilise innovative
              technologies, and develop chemical products to provide
              high-quality goods for your business.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              Agronova Group is a leader of industrial expertise and a
              reliable partner for long-term cooperation.
            </p>

            {/* <p>
              Our industrial chemicals are certified against ISO 9001,
              ISO 14001, ISO 45001, ISO 22000, and ISO/TS 22002-1.
            </p> */}

            <p>
              If you are looking for a reliable supplier of high-quality
              chemical products, Agronova Group is a perfect choice.
              Reliability, quality and environmental safety are the main
              advantages that we are proud to offer to our customers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}