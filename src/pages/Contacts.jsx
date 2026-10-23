
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactData = {
  export: [
    {
      title: "Sales of water-soluble / specialty products",
      email: "info@agranovatoo.com",
    },
    {
      title:
        "Sales of N(S), NP, NPK(S) fertilisers / feed additives",
      email: "info@agranovatoo.com",
    },
  ],
  domestic: [
    {
      title: "Agronova Kazakhstanis, LLP",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016 , Kazakhstan.",
      phone: "+7 (342) 207-11-50",
      emails: ["info@agranovatoo.com"],
    },
    {
      title: "Agronoatoo JSC",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016 , Kazakhstan.",
      phone: "+7 (495) 721 89 89",
      emails: [
        "info@agranovatoo.com",
        "info@agranovatoo.com",
      ],
    },
    {
      title: "Agrolaboratory",
      address:
        "St. Lobachevskogo, 57a, Zhetysuskiy District, City Almaty, 050016 , Kazakhstan.",
      emails: ["info@agranovatoo.com"],
    },
  ],
};

function ContactDetail({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3 text-sm leading-7 text-gray-600">
      <Icon
        size={18}
        strokeWidth={1.7}
        className="mt-1 shrink-0 text-red-700"
      />
      <div className="min-w-0 break-words">{children}</div>
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

        {contact.email && (
          <ContactDetail icon={Mail}>
            <EmailLink email={contact.email} />
          </ContactDetail>
        )}

        {contact.emails?.map((email) => (
          <ContactDetail key={email} icon={Mail}>
            <EmailLink email={email} />
          </ContactDetail>
        ))}
      </div>
    </article>
  );
}

export default function Contacts() {
  const [activeTab, setActiveTab] = useState("export");

  const isExport = activeTab === "export";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Page heading */}
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

        {/* Export / Russia, CIS selector */}
        <div
          className="flex flex-wrap items-center gap-2 border-b border-gray-200"
          role="tablist"
          aria-label="Contact regions"
        >
          <button
            id="export-tab"
            type="button"
            role="tab"
            aria-selected={isExport}
            aria-controls="contacts-panel"
            onClick={() => setActiveTab("export")}
            className={`relative -mb-px inline-flex min-h-12 items-center gap-2 border-b-2 px-5 py-3 text-sm font-medium transition-colors duration-200 sm:px-7 ${
              isExport
                ? "border-red-700 text-red-700"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            Export
            <ArrowUpRight size={16} />
          </button>

          <button
            id="domestic-tab"
            type="button"
            role="tab"
            aria-selected={!isExport}
            aria-controls="contacts-panel"
            onClick={() => setActiveTab("domestic")}
            className={`relative -mb-px inline-flex min-h-12 items-center gap-2 border-b-2 px-5 py-3 text-sm font-medium transition-colors duration-200 sm:px-7 ${
              !isExport
                ? "border-red-700 text-red-700"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            Kazakhstanis, CIS
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Contact content */}
        <section
          id="contacts-panel"
          role="tabpanel"
          aria-labelledby={isExport ? "export-tab" : "domestic-tab"}
          className="grid grid-cols-1 gap-x-12 pt-8 md:grid-cols-2 lg:gap-x-20"
        >
          {isExport ? (
            <>
              <div className="md:col-span-2 mb-4">
                <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
                  Export sales
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                  Contact our sales teams for water-soluble
                  products, specialty products, fertilisers
                  and feed additives.
                </p>
              </div>

              {contactData.export.map((contact) => (
                <ContactCard
                  key={contact.email}
                  contact={contact}
                />
              ))}
            </>
          ) : (
            <>
              <div className="md:col-span-2 mb-4">
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
            </>
          )}
        </section>

        {/* General enquiries footer */}
        <div className="mt-12 border-t border-gray-200 pt-7">
          <p className="text-sm leading-7 text-gray-500">
            For general enquiries, email{" "}
            <a
              href="mailto:info@agranovatoo.com"
              className="font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 hover:text-red-700"
            >
              Info@agranovatoo.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
