
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const languages = [
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "RU", name: "Русский", flag: "🇷🇺" },
  { code: "ES", name: "Español", flag: "🇪🇸" },
  { code: "PT", name: "Português", flag: "🇵🇹" },
  { code: "ZH", name: "中文", flag: "🇨🇳" },
];

function Logo() {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2 text-white">
      <span className="grid grid-cols-3 gap-1 -rotate-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </span>
      <Link to="/">
        <span className="flex flex-col leading-none">
          <strong className="text-xl font-black tracking-tight">
            AGRANOVA
          </strong>
          <small className="mt-1 text-[9px] font-bold tracking-[0.2em]">
            KAZAKHSTAN
          </small>
        </span>
      </Link>



      <span className="mx-2 h-8 w-px bg-white/60 max-lg:hidden" />

      <span className="text-[10px] leading-tight max-lg:hidden">
        Because everyone in the world
        <br />
        needs food
      </span>
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [showPrompt, setShowPrompt] = useState(true);

  const links = [
    { label: "Product catalogue", href: "/catalogue" },
    { label: "Application Industries", href: "/application-areas" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <header className="relative z-50 flex min-h-[84px] items-center justify-between gap-5 border-b-2 border-white/90 bg-[#A9BD72] px-5 py-4 text-white lg:h-[124px] lg:px-[2.65%] lg:py-0">
      <Logo />

      <nav
        className={`${menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col bg-[#9CAF68] px-6 py-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/20 py-4 text-sm font-bold transition-opacity hover:opacity-70 lg:border-0 lg:py-2 lg:text-[15px] lg:whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://www.agranovatoo.com/"
        target="_blank"
        rel="noreferrer"
        className="hidden shrink-0 text-sm font-bold transition-opacity hover:opacity-70 xl:block"
      >
        Industrial Chemistry
      </a>

      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => {
            setLanguageOpen(!languageOpen);
            setShowPrompt(false);
          }}
          aria-expanded={languageOpen}
          className="flex items-center gap-2 py-2 text-sm font-bold"
        >
          {language.code}
          <span className="text-lg">{language.flag}</span>
          <ChevronDown size={15} />
        </button>

        {languageOpen && (
          <div className="absolute right-0 top-full mt-3 max-h-80 w-56 overflow-y-auto rounded-xl bg-[#F7F7EE] p-2 text-[#283321] shadow-xl">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item);
                  setLanguageOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm hover:bg-[#E5EBD5] ${language.code === item.code ? "bg-[#E5EBD5]" : ""
                  }`}
              >
                <span>{item.flag}</span>
                <span>{item.name}</span>
                <span className="ml-auto text-xs opacity-60">
                  {item.code}
                </span>
              </button>
            ))}
          </div>
        )}

        {showPrompt && (
          <div className="absolute right-0 top-[-16px] z-20 w-[min(340px,90vw)] translate-y-0 rounded-b-2xl bg-[#F7F7EE] p-5 pt-6 text-[#22291C] shadow-xl sm:right-[-10px]">
            <p className="mb-4 text-base">
              Selected language:{" "}
              <strong className="font-medium">{language.code}</strong>
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowPrompt(false)}
                className="flex-1 rounded-full bg-gradient-to-r from-[#4AB76A] to-[#0DA99E] px-3 py-3 text-[10px] font-bold uppercase text-white"
              >
                Yes, correct
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowPrompt(false);
                  setLanguageOpen(true);
                }}
                className="flex-1 rounded-full border border-[#343A30] px-3 py-3 text-[10px] font-bold uppercase"
              >
                No, change
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="flex items-center justify-center lg:hidden"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}
