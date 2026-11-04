
import { useState } from "react";
import Image1 from "../assets/ktt.jpeg";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  FileText,
  ShoppingBag,
  Headphones,
  PhoneCall,
} from "lucide-react";

/* =========================================
   CONTACT DATA
========================================= */

const contactData = {
  domestic: [
    {
      title: "Agronova Kazakhstanis, LLP",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016, Kazakhstan.",
      phone: "+7 (729) 092 3204",
      emails: ["info@agranovatoo.com"],
    },
    {
      title: "Agronoatoo JSC",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016, Kazakhstan.",
      phone: "+7 (729) 092 3204",
      emails: [
        "info@agranovatoo.com",
        "info@agranovatoo.com",
      ],
    },
    {
      title: "Agrolaboratory",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016, Kazakhstan.",
      emails: ["info@agranovatoo.com"],
    },
  ],
};

/* =========================================
   PROCUREMENT MENU
========================================= */

const procurementMenu = [
  {
    title: "Message for Suppliers",
    path: "#",
    icon: FileText,
    active: true,
  },
  {
    title: "Key Purchases",
    path: "#",
    icon: ShoppingBag,
  },
  {
    title: "B2B Altis Technical Support",
    path: "#",
    icon: Headphones,
  },
  {
    title: "Hotline",
    path: "/hotline",
    icon: PhoneCall,
  },
];

/* =========================================
   PROCUREMENT SIDEBAR
========================================= */

function ProcurementSidebar() {
  return (
    <aside className="w-full lg:max-w-[285px]">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Procurement
      </h2>

      <nav className="border-l border-gray-200">
        {procurementMenu.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.path}
              aria-current={item.active ? "page" : undefined}
              className={`group -ml-px flex items-center gap-4 border-l-2 py-5 pl-5 pr-3 text-sm transition-all duration-200 ${item.active
                ? "border-red-700 font-semibold text-red-700"
                : "border-transparent text-gray-600 hover:border-red-700 hover:text-red-700"
                }`}
            >
              <Icon size={19} strokeWidth={1.7} />

              <span className="flex-1">
                {item.title}
              </span>

              <ChevronRight
                size={16}
                className="shrink-0 opacity-50 transition-transform group-hover:translate-x-1"
              />
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

/* =========================================
   SUPPLIER MESSAGE
========================================= */

function SupplierMessage() {
  return (
    <article className="max-w-[850px]">
      <div className="mb-9">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
          Agranova · Procurement
        </p>

        <h2 className="text-3xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Message from the Head of Procurement
        </h2>
      </div>

      {/* Agranova placeholder image */}

      {/* Agranova procurement director image */}

      <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="h-[259px] w-full shrink-0 overflow-hidden bg-gray-100 sm:w-[230px]">
          <img
            src={Image1}
            alt="Agranova Head of Procurement"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex-1 text-[15px] leading-[1.95] text-gray-600">
          <p className="mb-5 font-semibold text-gray-900">
            Dear Valued Partners,
          </p>

          <p className="mb-5">
            At Agranova Too, we recognise that efficient procurement is
            essential to our operational excellence and long-term business
            success. We remain committed to maintaining transparent, competitive,
            and reliable procurement processes that create value for our business and partners.
          </p>

          <p className="mb-5">
            As part of our commitment to innovation and import substitution,  Agranova Too was
            among the first Russian companies to replace foreign procurement software with B2B Altis, a modern,
            locally developed automated procurement platform. Since March 2024, it has served as our primary electronic procurement system.
          </p>

          <p className="mb-5">
            We welcome qualified organisations to become our suppliers through open and competitive procurement processes.
            Prospective partners are expected to meet our established
            standards for reliability, financial stability, quality, and security.
          </p>

          <p className="mb-5">
            We deeply value our long-standing relationships with existing suppliers and continuously
            work to strengthen cooperation, improve procurement practices,
            and enhance communication with our business partners.
          </p>

          <p className="mb-5">
            We look forward to welcoming new suppliers and
            building lasting partnerships founded on trust,
            transparency, and mutual success.
          </p>

          <p className="mb-8">
            Thank you for your interest in Aram.
            We wish you every success and look forward to fruitful cooperation.
          </p>

          <div className="border-l-2 border-red-700 pl-5">

            <p className="font-bold text-gray-900">
              Chief Procurement Officer
            </p>

            <p className="text-gray-600">
              Akhmetov Nurislam<br />
              Agranova Too
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-7">
        <h3 className="mb-4 text-xl font-medium text-gray-900">
          Working with Agranova
        </h3>

        <p className="text-sm leading-7 text-gray-600">
          Suppliers seeking to establish a business relationship
          with Agranova should contact the company through its
          official communication channels to enquire about
          procurement opportunities and applicable requirements.
        </p>

        <a
          href="/contacts"
          className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-red-700 transition-colors hover:text-red-900"
        >
          Contact Agranova
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

/* =========================================
   PROCUREMENT PAGE
========================================= */

function ProcurementPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb and heading */}

      <div className="mb-10 border-b border-gray-200 pb-7">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <a
            href="/"
            className="transition hover:text-red-700"
          >
            Home
          </a>

          <ChevronRight size={13} />

          <span>Procurement</span>

          <ChevronRight size={13} />

          <span className="text-gray-700">
            How to become a supplier
          </span>
        </div>

        <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-red-700">
          Procurement
        </h2>
      </div>

      {/* Procurement layout */}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[285px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        <ProcurementSidebar />

        <SupplierMessage />
      </div>
    </div>
  );
}

/* =========================================
   CONTACT COMPONENTS
========================================= */

function ContactDetail({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-7 text-gray-600">
      <Icon
        size={18}
        strokeWidth={1.7}
        className="mt-1 shrink-0 text-red-700"
      />

      <div className="min-w-0 break-words">
        {children}
      </div>
    </div>
  );
}

function EmailLink({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="break-all text-gray-800 underline decoration-gray-300 underline-offset-4 transition hover:text-red-700 hover:decoration-red-700"
    >
      {email}
    </a>
  );
}

function ContactCard({ contact }) {
  return (
    <article className="group border-t border-gray-200 py-7 transition-colors duration-200 hover:border-red-700 sm:py-8">
      <h2 className="mb-5 text-xl font-medium tracking-tight text-gray-900 sm:text-2xl">
        {contact.title}
      </h2>

      <div className="space-y-3">
        {contact.address && (
          <ContactDetail icon={MapPin}>
            {contact.address}
          </ContactDetail>
        )}

        {contact.phone && (
          <ContactDetail icon={Phone}>
            <a
              href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              className="transition hover:text-red-700"
            >
              {contact.phone}
            </a>
          </ContactDetail>
        )}

        {contact.emails?.map((email, index) => (
          <ContactDetail
            key={`${email}-${index}`}
            icon={Mail}
          >
            <EmailLink email={email} />
          </ContactDetail>
        ))}
      </div>
    </article>
  );
}

/* =========================================
   CONTACTS PAGE
========================================= */

export default function Contacts() {
  const [activeTab, setActiveTab] = useState("procurement");

  const isProcurement = activeTab === "procurement";

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Main page heading */}

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pt-16 lg:px-12">

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              Agronova Kazakhstan
            </p>

            <h1 className="text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
              Contacts
            </h1>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-right">
            Find the right contact for product enquiries,
            sales and regional business matters.
          </p>

        </div>

        {/* PROCUREMENT / KAZAKHSTANIS TABS */}

        <div
          className="flex flex-wrap items-center gap-2 border-b border-gray-200"
          role="tablist"
          aria-label="Contact categories"
        >

          {/* Procurement tab */}

          <button
            id="procurement-tab"
            type="button"
            role="tab"
            aria-selected={isProcurement}
            aria-controls="contacts-panel"
            onClick={() => setActiveTab("procurement")}
            className={`relative -mb-px inline-flex min-h-12 items-center gap-2 border-b-2 px-5 py-3 text-sm font-medium transition-colors duration-200 sm:px-7 ${isProcurement
              ? "border-red-700 text-red-700"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
          >
            Procurement

            <ArrowUpRight size={16} />
          </button>

          {/* Kazakhstanis, CIS tab */}

          <button
            id="domestic-tab"
            type="button"
            role="tab"
            aria-selected={!isProcurement}
            aria-controls="contacts-panel"
            onClick={() => setActiveTab("domestic")}
            className={`relative -mb-px inline-flex min-h-12 items-center gap-2 border-b-2 px-5 py-3 text-sm font-medium transition-colors duration-200 sm:px-7 ${!isProcurement
              ? "border-red-700 text-red-700"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
          >
            Kazakhstanis, CIS

            <ArrowUpRight size={16} />
          </button>

        </div>

        {/* TAB CONTENT */}

        <section
          id="contacts-panel"
          role="tabpanel"
          aria-labelledby={
            isProcurement
              ? "procurement-tab"
              : "domestic-tab"
          }
          className="min-w-0"
        >

          {isProcurement ? (

            /* PROCUREMENT PAGE */

            <ProcurementPage />

          ) : (

            /* KAZAKHSTANIS, CIS CONTACTS */

            <div className="grid grid-cols-1 gap-x-12 pt-8 md:grid-cols-2 lg:gap-x-20">

              <div className="mb-4 md:col-span-2">

                <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
                  Kazakhstanis, CIS
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                  Contact our offices and teams responsible
                  for business in Russia and the Commonwealth
                  of Independent States.
                </p>

              </div>

              {contactData.domestic.map((contact) => (
                <ContactCard
                  key={contact.title}
                  contact={contact}
                />
              ))}

            </div>

          )}

        </section>

        {/* GENERAL ENQUIRIES FOOTER */}

        <div className="mt-12 border-t border-gray-200 pt-7">

          <p className="text-sm leading-7 text-gray-500">
            For general enquiries, email{" "}

            <a
              href="mailto:info@agranovatoo.com"
              className="font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 hover:text-red-700"
            >
              Info@agranovatoo.com
            </a>.

          </p>

        </div>

      </section>

    </main>
  );
}
