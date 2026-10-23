
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
    name: "Urea Technical Prilled Premium Grade",
    category: "Urea",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Urea is used in the chemical industry as a raw material to produce plastics, adhesives and urea-formaldehyde resins, as well as to produce liquid additives for aftertreatment of exhaust gases from industrial plants and diesel engines of vessels (ISO 18611) and vehicles (ISO 22241).",
    scopes: ["Chemicals", "Environmental solutions"],
  },
  {
    id: 2,
    name: "Urea Technical Prilled First Grade",
    category: "Urea",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Urea is used in the chemical industry as a raw material to produce plastics, adhesives and urea-formaldehyde resins, as well as to produce liquid additives for aftertreatment of exhaust gases from industrial plants and diesel engines of vessels (ISO 18611) and vehicles (ISO 22241).",
    scopes: ["Chemicals", "Environmental solutions"],
  },
  {
    id: 3,
    name: "Ammonium Nitrate GOST 2-2013 Grade A",
    category: "Nitrates",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Ammonium nitrate is used as the main oxidiser in various types of industrial explosives.",
    scopes: ["Mining", "Construction"],
  },
  {
    id: 4,
    name: "Ammonium Nitrate GOST 2-2013 Grade B",
    category: "Nitrates",
    image: "https://i.ibb.co/99LrM10f/product2.jpg",
    description:
      "Ammonium nitrate is used as the main oxidiser in various types of industrial explosives.",
    scopes: ["Mining", "Construction"],
  },
  {
    id: 5,
    name: "Ammonium Nitrate water-resistant grade",
    category: "Nitrates",
    image: "https://i.ibb.co/99LrM10f/product2.jpg",
    description:
      "For the production of industrial explosive mixtures for waterflooded rock applications.",
    scopes: ["Mining", "Construction"],
  },
  {
    id: 6,
    name: "Ammonium Nitrate Porous prilled (PPAN)",
    category: "Nitrates",
    image: "https://i.ibb.co/99LrM10f/product2.jpg",
    description:
      "Porous modified ammonium nitrate is used in the production of the ANFO industrial explosive, which is typically used for 127 mm wells.",
    scopes: ["Mining"],
  },
  {
    id: 7,
    name: "Sodium Nitrite Untreated",
    category: "Specialties",
    image: "https://i.ibb.co/N6BKD6Jp/product3.jpg",
    description:
      "Sodium nitrite is utilised across multiple industries, notably as a gas-forming agent in explosive emulsion formulations.",
    scopes: ["Chemicals", "Mining"],
  },
  {
    id: 8,
    name: "MAP Technical Water-Soluble",
    category: "Specialties",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Monoammonium phosphate is a universal fire-retarding agent.",
    scopes: ["Fire protection", "Woodworking"],
  },
  {
    id: 9,
    name: "Sodium Nitrate Untreated Grade B",
    category: "Nitrates",
    image: "https://i.ibb.co/N6BKD6Jp/product3.jpg",
    description:
      "As a component of emulsion explosives, sodium nitrate lowers the emulsion crystallisation temperature while enhancing detonation energy.",
    scopes: ["Mining", "Chemicals"],
  },
  {
    id: 10,
    name: "Calcium Nitrate Anhydrous",
    category: "Nitrates",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Calcium nitrate is widely used across multiple industries.",
    scopes: ["Construction", "Chemicals"],
  },
  {
    id: 11,
    name: "ADBLUE, nitrogen oxide reducer AUS 32",
    category: "ADBLUE",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "The product is intended to effectively reduce emissions of nitrogen oxides from vehicles with diesel engines.",
    scopes: ["Environmental solutions"],
  },
  {
    id: 12,
    name: "Ammonia anhydrous liquefied GOST 6221-90 Grade Ak, B",
    category: "Ammonia",
    image: "https://i.ibb.co/XZBbNy1b/product1.jpg",
    description:
      "Grade Ak and B anhydrous liquefied ammonia is used in the production of nitrogen fertilisers and as a standalone straight fertiliser.",
    scopes: ["Chemicals", "Environmental solutions"],
  },
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
            className={`${
              mobileFiltersOpen ? "block" : "hidden"
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
                    className={`shrink-0 rounded-full border px-[17px] py-[9px] text-[14px] transition-colors duration-200 ${
                      active
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
