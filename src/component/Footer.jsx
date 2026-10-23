
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Application industries", href: "/application-areas" },
  { label: "Product catalogue", href: "/catalogUE" },
  { label: "Contacts", href: "/contacts" },
];

function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    setShowCookieBanner(
      localStorage.getItem("uralchem-cookie-consent") !== "accepted"
    );
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("uralchem-cookie-consent", "accepted");
    setShowCookieBanner(false);
  };

  return (
    <>
      <footer className="bg-[#f5f7f8] text-[#98989a]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          {/* Footer navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-1 border-b border-white/15 md:grid-cols-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex min-h-[76px] items-center justify-between
                  border-b border-white/15 py-5 text-[14px] font-medium
                  transition-colors duration-300 hover:text-[#b7d46b]
                  md:border-b-0 md:border-r md:border-white/15
                  md:pr-6 md:last:border-r-0 md:[&:not(:first-child)]:pl-6"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300
                    group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* Main footer */}
          <div className="grid grid-cols-1 gap-12 py-12 sm:py-16 md:grid-cols-2 md:gap-16 lg:py-20">

            {/* Corporate identity */}
            <div className="flex flex-col items-start">
              <a
                href="/"
                aria-label="agronova home"
                className="inline-flex items-center gap-3"
              >
                {/* Replace with the official logo asset if available */}
<Link to="/" className="flex items-center">
  <img
    src="https://i.ibb.co/RTPrg8Qb/logo.jpg"
    alt="Agranova Logo"
    className="h-10 w-auto object-contain"
  />
</Link>

                <span className="text-2xl font-bold tracking-[0.16em]">
                  AGRANOVA
                </span>
              </a>

              <a
                href="https://agranovatoo.com//"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-4
                  text-sm text-[#98989a] transition-colors hover:text-[#b7d46b]"
              >
                Corporate website
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* Contact details */}
            <div className="flex flex-col items-start">
              <span className="mb-5 text-[11px] font-medium tracking-[0.2em] text-[#98989a]">
                CONTACTS
              </span>

              <div className="flex flex-col items-start gap-4">
                <a
                  href="tel:+7 (729) 092 3204"
                  className="text-base transition-colors hover:text-[#b7d46b]"
                >
                  +7 (729) 092 3204
                </a>

                <a
                  href="tel:+7 (729) 092 3204"
                  className="text-base transition-colors hover:text-[#b7d46b]"
                >
                  +7 (729) 092 3204(Fax)
                </a>

                <a
                  href="mailto:sales@agranovatoo.com"
                  className="break-all text-base transition-colors hover:text-[#b7d46b]"
                >
                  info@agranovatoo.com
                </a>

                <address className="mt-2 max-w-sm text-sm not-italic leading-7 text-[#98989a]">
                  St. Lobachevskogo, 57a, , 
                  <br />
                  Zhetysuskiy District, City Almaty, 050016 
                  <br />
                  Kazakhstan.
                </address>
              </div>
            </div>
          </div>

          {/* Legal footer */}
          <div className="flex flex-col gap-5 border-t border-white/15 py-6
            text-xs text-[#98989a] md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Agronova. All rights reserved.
            </p>

            <a
              href="https://agranovatoo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Personal Data Processing Policy ↗
            </a>

            <a
              href="https://only.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Made by Only. ↗
            </a>
          </div>
        </div>
      </footer>

      {/* Cookie consent banner */}
      {showCookieBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10
            bg-[#f4f4ef] text-[#191b17] shadow-[0_-8px_35px_rgba(0,0,0,0.12)]"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5
            px-5 py-6 sm:px-8 md:flex-row md:items-center
            md:justify-between md:gap-10 lg:px-14">

            <p className="max-w-4xl text-xs leading-6 sm:text-sm">
              This website uses analytical cookies to optimise its performance
              and improve the user experience, as well as statistical cookies
              to track visit statistics. By clicking Agree, you consent to our use
              of these cookies.
            </p>

            <button
              type="button"
              onClick={acceptCookies}
              className="flex shrink-0 items-center justify-between gap-8
                bg-[#191b17] px-7 py-4 text-sm text-[#98989a]
                transition-colors hover:bg-[#3a4435] md:min-w-36"
            >
              Agree
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
