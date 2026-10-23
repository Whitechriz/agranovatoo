
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    FlaskConical,
    Factory,
    Construction,
    PanelsTopLeft,
    Wheat,
    Droplets,
} from "lucide-react";

const industries = [
    {
        number: "01",
        title: "Chemicals",
        icon: FlaskConical,
        description: "Solutions for the chemical industry",
    },
    {
        number: "02",
        title: "Oil & gas",
        icon: Factory,
        description: "Products for oil and gas operations",
    },
    {
        number: "03",
        title: "Construction",
        icon: Construction,
        description: "Materials for construction applications",
    },
    {
        number: "04",
        title: "Glass-making",
        icon: PanelsTopLeft,
        description: "Solutions for glass production",
    },
    {
        number: "05",
        title: "Agriculture",
        icon: Wheat,
        description: "Fertilisers for modern agriculture",
    },
    {
        number: "06",
        title: "Water treatment",
        icon: Droplets,
        description: "Solutions for water treatment",
    },
];

export default function ProductCategories() {
    const [activeTab, setActiveTab] = useState("industry");
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(null);

    const categories =
        activeTab === "industry"
            ? industries
            : [...industries].reverse();

    return (
        <section
            id="product-categories"
            className="overflow-hidden bg-[#F5F7F7] px-5 py-16 text-[#454545] sm:px-10 sm:py-20 lg:px-[12%] lg:py-24"
        >
            <div className="mx-auto max-w-[1280px]">
                {/* Heading and controls */}
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                        Catalogue
                    </h2>

                    <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-5 sm:gap-7">
                            <button
                                type="button"
                                onClick={() => {
                                    setActiveTab("industry");
                                    setSelected(null);
                                }}
                                className={`border-b-2 pb-3 text-sm transition sm:text-base ${activeTab === "industry"
                                        ? "border-emerald-500 text-[#454545]"
                                        : "border-transparent text-[#777777] hover:text-[#454545]"
                                    }`}
                            >
                                By application industry
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setActiveTab("category");
                                    setSelected(null);
                                }}
                                className={`border-b-2 pb-3 text-sm transition sm:text-base ${activeTab === "category"
                                        ? "border-emerald-500 text-[#454545]"
                                        : "border-transparent text-[#777777] hover:text-[#454545]"
                                    }`}
                            >
                                By category
                            </button>
                        </div>

                        <Link
                            to="/catalogue"
                            className="inline-flex items-center gap-3 rounded-full border border-[#555555] px-7 py-4 text-sm font-bold transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-white sm:text-base"
                        >
                            View more
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Overlapping category cards */}
                <div className="relative space-y-0">
                    {categories.map((item, index) => {
                        const Icon = item.icon;
                        const isHighlighted =
                            hovered === index || selected === index;

                        return (
                            <button
                                key={`${activeTab}-${item.number}`}
                                type="button"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(-1)}
                                onFocus={() => setHovered(index)}
                                onBlur={() => setHovered(-1)}
                                onClick={() =>
                                    setSelected(selected === index ? null : index)
                                }
                                aria-pressed={selected === index}
                                className={`group relative flex min-h-[145px] w-full items-center justify-between gap-4 border-0 px-7 py-6 text-left transition-all duration-500 ease-out sm:min-h-[155px] sm:px-12 lg:min-h-[175px] lg:px-14 ${index === 0 ? "" : "-mt-8 sm:-mt-10"
                                    } ${isHighlighted
                                        ? "z-10 bg-gradient-to-r from-[#78AD9A] to-[#72A9C8] text-white shadow-[0_12px_35px_rgba(72,119,103,0.20)]"
                                        : "bg-white text-[#454545] shadow-[0_6px_22px_rgba(0,0,0,0.055)] hover:z-20 hover:bg-gradient-to-r hover:from-[#78AD9A] hover:to-[#72A9C8] hover:text-white hover:shadow-[0_14px_35px_rgba(72,119,103,0.22)]"
                                    }`}
                                style={{
                                    clipPath:
                                        "polygon(1.5% 0, 98.5% 0, 96.5% 100%, 3.5% 100%)",
                                    borderRadius: "24px",
                                }}
                            >
                                <span className="flex min-w-0 skew-x-[2deg] items-center gap-4 sm:gap-6 lg:gap-8">
                                    <span
                                        className={`text-sm ${isHighlighted ? "text-white/75" : "text-[#A0A0A0]"
                                            }`}
                                    >
                                        {item.number}
                                    </span>

                                    <span>
                                        <span className="block text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                                            {item.title}
                                        </span>

                                        <span
                                            className={`mt-2 hidden text-sm sm:block ${isHighlighted
                                                    ? "text-white/80"
                                                    : "text-[#858585]"
                                                }`}
                                        >
                                            {item.description}
                                        </span>
                                    </span>
                                </span>

                                <span
                                    className={`shrink-0 skew-x-[2deg] transition-transform duration-500 ${isHighlighted
                                            ? "translate-x-0 scale-105"
                                            : "text-[#32B8A0] group-hover:scale-105"
                                        }`}
                                >
                                    <Icon
                                        size={48}
                                        strokeWidth={1.25}
                                        className={`sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px] ${isHighlighted
                                                ? "text-white/80"
                                                : "text-[#32B8A0]"
                                            }`}
                                    />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            
        </section>

        
    );
}
