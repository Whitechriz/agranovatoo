
import { useState, useEffect } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    title: "Fertilisers for\nopen field",
    category: "OPEN FIELD",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=2000&q=90",
    cards: [
      {
        title: "Nitrogen fertilisers",
        subtitle: "FOR HEALTHY CROP GROWTH",
        image:
          "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=650&q=85",
      },
      {
        title: "Complex fertilisers",
        subtitle: "BALANCED PLANT NUTRITION",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=650&q=85",
      },
    ],
  },
  {
    title: "Fertilisers for\ngreenhouses",
    category: "GREENHOUSES",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=90",
    cards: [
      {
        title: "Water-soluble fertilisers",
        subtitle: "FOR PROFESSIONAL GROWING",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=650&q=85",
      },
      {
        title: "Specialty nutrition",
        subtitle: "FOR GREENHOUSE CROPS",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=650&q=85",
      },
    ],
  },
  {
    title: "Fertilisers for\nfertigation",
    category: "FERTIGATION",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=2000&q=90",
    cards: [
      {
        title: "Potassium Nitrate NK 13.7-46.2",
        subtitle: "SPECIALTY FERTILISERS",
        image:
          "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=650&q=85",
      },
      {
        title: "AQUADROP NPK 5:15:45",
        subtitle: "WATER-SOLUBLE FERTILISERS",
        image:
          "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=650&q=85",
      },
    ],
  },
  {
    title: "Fertilisers for\nfoliar application",
    category: "FOLIAR APPLICATION",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=90",
    cards: [
      {
        title: "Micronutrient solutions",
        subtitle: "TARGETED PLANT NUTRITION",
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=650&q=85",
      },
      {
        title: "Specialty fertilisers",
        subtitle: "FOR STRONGER PLANTS",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=650&q=85",
      },
    ],
  },
];

const categories = [
  "Fertilisers for open field",
  "Fertilisers for greenhouses",
  "Fertilisers for fertigation",
  "Fertilisers for foliar application",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = slides[active];

  const changeSlide = (direction) => {
    setActive(
      (current) =>
        (current + direction + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative isolate min-h-[720px] overflow-hidden bg-[#aabd79] text-white lg:h-[calc(100svh-124px)] lg:min-h-[680px] lg:max-h-[900px]"
      aria-label="Featured agricultural products"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-width crop photography */}
      {slides.map((item, index) => (
        <div
          key={item.category}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Green colour treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#91ad5b]/70 via-[#a9c277]/35 to-[#9eb66d]/80"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#718b43]/20 via-transparent to-white/10"
      />

      {/* Main heading */}
      <div className="absolute left-6 top-12 max-w-[760px] sm:left-10 sm:top-16 lg:left-[2.65%] lg:top-[13%]">
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-white/90">
          AGRICULTURAL SOLUTIONS
        </p>

        {slides.map((item, index) => (
          <h1
            key={item.category}
            aria-hidden={index !== active}
            className={`whitespace-pre-line text-[clamp(3.1rem,6.2vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] transition-all duration-700 ${
              index === active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none absolute left-0 top-0 translate-y-4 opacity-0"
            }`}
          >
            {item.title}
          </h1>
        ))}

        <a
          href="#catalogue"
          className="mt-9 inline-flex h-14 items-center gap-7 rounded-full bg-white px-7 text-base font-semibold text-[#343c2b] transition hover:-translate-y-1 hover:bg-[#f1f4e8] sm:mt-12"
        >
          Catalogue
          <ArrowDownRight size={19} />
        </a>
      </div>

      {/* Right-side product cards */}
      <aside className="absolute bottom-[100px] left-5 right-5 grid grid-cols-2 gap-3 sm:left-auto sm:right-7 sm:top-[8%] sm:bottom-auto sm:w-[280px] sm:grid-cols-1 sm:gap-5 lg:right-[2.65%] lg:w-[300px]">
        {slide.cards.map((card, index) => (
          <a
            key={`${slide.category}-${card.title}`}
            href="#catalogue"
            className="group relative flex h-[205px] flex-col justify-end overflow-hidden rounded-lg border border-white/50 bg-[#aabd79]/90 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[245px] sm:p-4 lg:h-[270px]"
          >
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-60 transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#667e3e]/80 via-[#8fa85b]/10 to-transparent" />

            <span className="absolute right-0 top-0 grid h-10 w-10 place-items-center bg-white/20 backdrop-blur-sm">
              <ArrowDownRight size={20} />
            </span>

            <span className="relative mb-2 text-[8px] font-bold tracking-[0.13em] text-white/85 sm:text-[9px]">
              {card.subtitle}
            </span>

            <h2 className="relative max-w-[240px] text-sm font-bold leading-tight sm:text-base">
              {card.title}
            </h2>
          </a>
        ))}
      </aside>

      {/* Slide navigation */}
      <div className="absolute bottom-7 left-6 flex items-center gap-3 sm:left-10 lg:left-[2.65%]">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous agricultural category"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/80 transition hover:bg-white hover:text-[#617a3d]"
        >
          <ArrowLeft size={19} />
        </button>

        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next agricultural category"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/80 transition hover:bg-white hover:text-[#617a3d]"
        >
          <ArrowRight size={19} />
        </button>

        <span className="ml-2 text-xs font-semibold tracking-widest">
          0{active + 1} / 0{slides.length}
        </span>
      </div>

      {/* Category navigation */}
      <div className="absolute bottom-7 right-7 hidden max-w-[300px] flex-col gap-2 text-right xl:flex">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(index)}
            className={`flex items-center justify-end gap-2 text-xs transition ${
              active === index
                ? "font-bold text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {category}
            {active === index && <ChevronRight size={14} />}
          </button>
        ))}
      </div>
    </section>
  );
}
