
import { Link } from "react-router-dom";

const applicationAreas = [
  {
    number: "01",
    title: "Field Crops",
    description:
      "Nutrient solutions for maize, rice, wheat, sorghum, and other staple crops.",
    href: "/application-areas/field-crops/",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Agricultural fields ready for crop production",
  },
  {
    number: "02",
    title: "Fruits & Vegetables",
    description:
      "Crop nutrition for tomatoes, peppers, onions, fruits, and other horticultural crops.",
    href: "/application-areas/fruits-vegetables/",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh vegetables grown for food production",
  },
  {
    number: "03",
    title: "Plantation Crops",
    description:
      "Fertilizer solutions for cocoa, oil palm, rubber, and other perennial crops.",
    href: "/application-areas/plantation-crops/",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
    alt: "Lush tropical plantation vegetation",
  },
  {
    number: "04",
    title: "Greenhouse & Horticulture",
    description:
      "Specialized nutrition for greenhouse cultivation, nurseries, and protected farming.",
    href: "/application-areas/horticulture/",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85",
    alt: "Green plants cultivated in a controlled growing environment",
  },
  {
    number: "05",
    title: "Commercial Farming",
    description:
      "Reliable fertilizer supply for large-scale farms and commercial agricultural operations.",
    href: "/application-areas/commercial-farming/",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
    alt: "Large agricultural field",
  },
  {
    number: "06",
    title: "Soil Health & Nutrition",
    description:
      "Nutrient management solutions designed to support soil fertility and balanced crop nutrition.",
    href: "/application-areas/soil-nutrition/",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Cultivated farmland",
  },
];

function ApplicationCard({ area }) {
  return (
    <Link
      to={area.href}
      aria-label={`Explore fertilizer applications for ${area.title}`}
      className="group block min-w-0 rounded-sm focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#758b42]
        focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[1.28/1] overflow-hidden bg-[#e9eae5]">
        <img
          src={area.image}
          alt={area.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform
            duration-500 ease-out group-hover:scale-105
            motion-reduce:transition-none"
        />

        <span
          aria-hidden="true"
          className="absolute left-4 top-4 bg-[#f5f5f0] px-3 py-2
            text-xs font-medium text-[#242720]"
        >
          {area.number}
        </span>

        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex size-11 items-center
            justify-center rounded-full bg-[#f5f5f0] text-xl text-[#242720]
            transition-colors duration-300 group-hover:bg-[#b9d66b]"
        >
          ↗
        </span>
      </div>

      <div className="border-b border-[#d9dbd4] py-5 sm:py-6">
        <h2
          className="text-xl font-medium tracking-tight text-[#242720]
            transition-colors duration-300 group-hover:text-[#687f3b]
            sm:text-2xl"
        >
          {area.title}
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-[#73766e]">
          {area.description}
        </p>
      </div>
    </Link>
  );
}

export default function ApplicationAreas() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#242720]">
      <section
        aria-labelledby="application-areas-heading"
        className="mx-auto max-w-[1440px] px-5 pb-12 pt-12
          sm:px-8 sm:pb-16 sm:pt-16 lg:px-14 lg:pb-20 lg:pt-20"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7b8e4b]" />

              <span className="text-xs uppercase tracking-[0.2em] text-[#73766e]">
                Agricultural solutions
              </span>
            </div>

            <h1
              id="application-areas-heading"
              className="max-w-4xl text-4xl font-medium leading-[1.08]
                tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              Application
              <br className="hidden sm:block" /> areas
            </h1>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#73766e] sm:text-base">
            Supporting modern agriculture with fertilizer solutions for
            diverse crops, farming systems, and soil nutrient requirements.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10
            sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3
            lg:gap-x-8 lg:gap-y-14"
        >
          {applicationAreas.map((area) => (
            <ApplicationCard key={area.number} area={area} />
          ))}
        </div>
      </section>
    </main>
  );
}
