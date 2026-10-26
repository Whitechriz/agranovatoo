
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/catalog-bottom.svg";
import {
  Search,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  X,
} from "lucide-react";

const categories = [
  "All categories",
  "Urea",
  "Nitrates",
  "Acids",
  "Specialties",
  "ADBLUE",
  "Ammonia",
  "Other",
  "UFC",
];

const applicationScopes = [
  "Fire protection",
  "Oil & gas",
  "Construction",
  "Metalworking",
  "Woodworking",
  "Glass-making",
  "Chemicals",
  "Environmental solutions",
  "Mining",
];

export const products = [
  {
    id: 1,
    name: "Potassium Nitrate Premium Grade",
    category: "Potassium Nitrate",
    image: "https://i.ibb.co/s9V3BzwG/Potassium-Nitrate-Premium-Grade.png",
    description:
      "Potassium nitrate is a high-quality source of potassium and nitrogen used in the production of fertilizers for modern agriculture. It supports healthy plant growth, improves nutrient uptake, and contributes to crop development and quality. Its high solubility makes it suitable for fertigation, hydroponic systems, and other specialized agricultural applications. Potassium nitrate is also used in selected industrial processes.",
    scopes: ["Agriculture", "Fertilizers", "Industrial applications"],
  },
  {
    id: 2,
    name: "Anhydrous Liquefied Ammonia",
    category: "Ammonia",
    image: "https://i.ibb.co/tMYcc3QK/Anhydrous-Liquefied-Ammonia.png",
    description:
      "Anhydrous liquefied ammonia is an industrial chemical used in fertilizer manufacturing, chemical processing, and other industrial applications.",
    scopes: ["Agriculture", "Chemicals", "Fertilizer Manufacturing", "Industrial Processing"],
  },
  {
    id: 3,
    name: "Ammonium Nitrate GOST 2-2013 Grade A",
    category: "Nitrates",
    image: "https://i.ibb.co/kgYRtq58/Ammonium-Nitrate-GOST-2-2013-Grade-A.png",
    description:
      "Ammonium nitrate is used as the main oxidiser in various types of industrial explosives.",
    scopes: ["Mining", "Construction"],
  },
  {
    id: 4,
    name: "Monopotassium Phosphate Premium Grade",
    category: "Phosphate Fertilizers",
    image: "https://i.ibb.co/842Bf9G2/Monopotassium-Phosphate-Premium-Grade.png",
    description:
      "Monopotassium phosphate (MKP) is a high-purity, water-soluble fertilizer that provides essential phosphorus and potassium for healthy plant growth and improved crop productivity. It supports root development, flowering, fruit formation, and crop quality. Its excellent solubility makes it suitable for fertigation, hydroponics, and foliar application in modern agricultural systems. Monopotassium phosphate is also used in selected food-processing and industrial applications, subject to the required grade and specifications.",
    scopes: ["Agriculture", "Fertilizers", "Industrial applications"],
  },
  {
    id: 5,
    name: "Urea Technical Prilled First Grade",
    category: "Urea",
    image: "https://i.ibb.co/JwDSgpTq/Urea-Technical-Prilled-First-Grade.png",
    description:
      "Urea Technical Prilled First Grade is a technical-grade urea product composed primarily of carbamide (CO(NH₂)₂), a nitrogen-containing organic compound. It is used as an industrial raw material in chemical manufacturing, resin and adhesive production, and other processes requiring urea. Product purity, biuret content, moisture, and other specifications depend on the manufacturer's technical data sheet.",
    scopes: ["Chemicals", "Industrial Processing", "Resin Manufacturing", "Adhesives"],
  },
  {
    id: 6,
    name: "Ammonium Nitrate Porous prilled (PPAN)",
    category: "Nitrates",
    image: "https://i.ibb.co/hxWKf7WT/Ammonium-Nitrate-Porous-prilled-PPAN.png",
    description:
      "Porous modified ammonium nitrate is used in the production of the ANFO industrial explosive, which is typically used for 127 mm wells.",
    scopes: ["Mining"],
  },
  {
    id: 7,
    name: "Sodium Nitrite Untreated",
    category: "Specialties",
    image: "https://i.ibb.co/N6b7BKJb/Sodium-Nitrite-Untreated.png",
    description:
      "Sodium nitrite is utilised across multiple industries, notably as a gas-forming agent in explosive emulsion formulations.",
    scopes: ["Chemicals", "Mining"],
  },
  {
    id: 8,
    name: "MAP Technical Water-Soluble",
    category: "Specialties",
    image: "https://i.ibb.co/WW7QM6yV/Monoammonium-Phosphate-Special-Water-Soluble.png",
    description:
      "Monoammonium phosphate is a universal fire-retarding agent.",
    scopes: ["Fire protection", "Woodworking"],
  },

  {
    id: 9,
    name: "Granular Sulphur Bio-Fertilizer",
    category: "Specialties",
    image: "https://i.ibb.co/GvjkqNdk/Granular-Sulphur-Bio-Fertilizer-Sack.png",
    description:
      "Granular sulphur bio-fertilizer supports plant nutrition and soil fertility by supplying sulphur, an essential nutrient for healthy plant growth.",
    scopes: ["Agriculture", "Fertilizers", "Soil Improvement"],
  },
  {
    id: 10,
    name: "ADBLUE, nitrogen oxide reducer AUS 32",
    category: "ADBLUE",
    image: "https://i.ibb.co/d4Qh0mHp/ADBLUE-Nitrogen-oxide-reducer-AUS-32.png",
    description:
      "The product is intended to effectively reduce emissions of nitrogen oxides from vehicles with diesel engines.",
    scopes: ["Environmental solutions"],
  },
  {
    id: 11,
    name: "Ammonia anhydrous liquefied GOST 6221-90 Grade Ak, B",
    category: "Ammonia",
    image: "https://i.ibb.co/bMx7y0pW/Ammonia-anhydrous-liquefied-GOST-6221-90-Grade-Ak-B.png",
    description:
      "Grade Ak and B anhydrous liquefied ammonia is used in the production of nitrogen fertilisers and as a standalone straight fertiliser.",
    scopes: ["Chemicals", "Environmental solutions"],
  },
  {
    id: 12,
    name: "NPK 19-4-19",
    category: "Specialties",
    image: "https://i.ibb.co/wNcz2nT3/NPK-19419.png",
    description:
      "NPK 19-4-19 is a compound fertilizer containing 19% nitrogen (N), 4% phosphate (P₂O₅), and 19% potash (K₂O). It provides nitrogen to support vegetative growth and chlorophyll production, phosphorus for energy transfer and root development, and potassium for water regulation and overall plant health. It is used to support crop growth and nutrient management where this nutrient balance is appropriate for the crop and soil conditions.",
    scopes: ["Agriculture", "Fertilizers", "Crop Nutrition", "Horticulture"],
  },
  {
    id: 13,
    name: "Solar Calcium Nitrate Fertilizer",
    category: "Nitrates",
    image: "https://i.ibb.co/fdpwjFK9/Solar-Calcium-Nitrate-Fertilizer-Bag.png",
    description:
      "Solar Calcium Nitrate Fertilizer is a water-soluble fertilizer that supplies plants with calcium and nitrogen. Calcium supports cell wall development, tissue strength, and healthy growing points, while nitrogen promotes vegetative growth and chlorophyll formation. It is used in crop nutrition programs to support plant development and improve fruit quality where calcium and nitrogen supplementation is required.",
    scopes: ["Agriculture", "Fertilizers", "Horticulture", "Greenhouse Cultivation"],
  }
];

function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="catalogue-card group relative flex min-w-0 flex-col rounded-[9px]">
      <Link
        to={`/catalogue/${product.id}`}
        aria-label={`View ${product.name}`}
        className="absolute right-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-bl-lg rounded-tr-[9px] bg-gradient-to-br from-emerald-500 to-cyan-400 text-white opacity-0 transition duration-200 group-hover:opacity-100 focus:opacity-100"
      >
        <ArrowUpRight size={20} />
      </Link>

      <Link
        to={`/catalogue/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="flex h-[150px] items-center justify-center px-5 pt-5">
          {!imageFailed ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-center text-xs text-slate-400">
              Product image unavailable
            </div>
          )}
        </div>

        <div className="px-[18px] pb-5 pt-3">
          <h2 className="mb-2 text-[21px] font-bold leading-[1.35] text-[#383838]">
            {product.name}
          </h2>

          <p className="text-[15.5px] leading-[1.48] text-[#9299a1]">
            {product.description}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function Catalogue() {
  const [activeCategory, setActiveCategory] =
    useState("All categories");
  const [search, setSearch] = useState("");
  const [selectedScopes, setSelectedScopes] = useState([]);
  const [scopeOpen, setScopeOpen] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All categories" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      const matchesScope =
        selectedScopes.length === 0 ||
        selectedScopes.some((scope) => product.scopes.includes(scope));

      return matchesCategory && matchesSearch && matchesScope;
    });
  }, [activeCategory, search, selectedScopes]);

  function toggleScope(scope) {
    setSelectedScopes((current) =>
      current.includes(scope)
        ? current.filter((item) => item !== scope)
        : [...current, scope]
    );
  }

  function clearFilters() {
    setSearch("");
    setActiveCategory("All categories");
    setSelectedScopes([]);
  }

  return (
    <div className="min-h-screen bg-white text-[#383838]">
      {/* Catalogue content */}
      <div className="mx-auto max-w-[1720px] px-5 pb-16 sm:px-8 lg:px-[46px]">
        {/* Mobile filter controls */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-200 py-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm"
          >
            <SlidersHorizontal size={16} />
            Filters
            {mobileFiltersOpen ? (
              <X size={15} />
            ) : (
              <ChevronDown size={15} />
            )}
          </button>

          <span className="text-sm text-gray-500">
            {filteredProducts.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[362px_minmax(0,1fr)] lg:gap-[54px]">
          {/* Left filter sidebar */}
          <aside
            className={`${mobileFiltersOpen ? "block" : "hidden"
              } rounded-b-[10px] bg-[#f5f7f8] px-7 pb-10 pt-5 lg:sticky lg:top-0 lg:block`}
          >
            <label className="flex items-center gap-3 border-b border-[#d7dadd] pb-4">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#9299a1]"
              />
              <Search size={19} strokeWidth={1.5} />
            </label>

            <button
              type="button"
              onClick={() => setScopeOpen((open) => !open)}
              aria-expanded={scopeOpen}
              className="flex w-full items-center justify-between py-5 text-left text-[21px] font-bold"
            >
              Application scope
              {scopeOpen ? (
                <ChevronUp size={15} />
              ) : (
                <ChevronDown size={15} />
              )}
            </button>

            {scopeOpen && (
              <div className="space-y-[11px]">
                {applicationScopes.map((scope) => (
                  <label
                    key={scope}
                    className="flex cursor-pointer items-center gap-2 text-[15.5px] leading-5"
                  >
                    <input
                      type="checkbox"
                      checked={selectedScopes.includes(scope)}
                      onChange={() => toggleScope(scope)}
                      className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-emerald-500"
                    />
                    <span>{scope}</span>
                  </label>
                ))}
              </div>
            )}

            <div className="mt-10 border-t border-[#d7dadd] pt-5">
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-[#687780] transition hover:text-emerald-600"
              >
                Clear filters
              </button>
            </div>
          </aside>

          {/* Main catalogue area */}
          <section className="min-w-0">
            <div className="catalogue-tabs flex gap-2 overflow-x-auto py-1 lg:gap-[18px]">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full border px-[17px] py-[9px] text-[14px] transition-colors duration-200 ${active
                        ? "border-transparent bg-gradient-to-r from-emerald-500 to-cyan-400 font-semibold text-white"
                        : "border-[#dedede] bg-white text-[#454545] hover:border-emerald-400"
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mb-5 mt-6 flex items-center justify-between">
              <p className="text-sm text-[#8b9298]">
                {filteredProducts.length} products
              </p>

              {(search || selectedScopes.length > 0 ||
                activeCategory !== "All categories") && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-emerald-700 hover:underline"
                  >
                    Reset
                  </button>
                )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-7 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-[#f5f7f8] px-6 py-16 text-center">
                <Search className="mx-auto mb-4 text-gray-400" size={30} />
                <h2 className="text-xl font-semibold">No products found</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Try another search or change your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-white"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      <div className="flex items-center justify-center" >
        <img src={myImage} alt="My photo" />
      </div>

    </div>
  );
}
