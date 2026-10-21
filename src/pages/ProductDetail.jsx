
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Layers3,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { products } from "./Catalogue";

function ProductImage({ product }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-white p-8 sm:min-h-[420px]">
      {!imageFailed ? (
        <img
          src={product.image}
          alt={product.name}
          onError={() => setImageFailed(true)}
          className="max-h-[360px] w-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-center text-slate-400">
          <FlaskConical size={52} strokeWidth={1.2} />
          <span>Product image unavailable</span>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center px-5">
        <div className="max-w-md text-center">
          <FlaskConical
            size={48}
            className="mx-auto mb-5 text-emerald-500"
          />
          <h1 className="text-3xl font-bold text-[#383838]">
            Product not found
          </h1>
          <p className="mt-3 text-slate-500">
            This product may not exist or may have been moved.
          </p>
          <Link
            to="/catalogue"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            <ArrowLeft size={18} />
            Back to catalogue
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-[#383838]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            <Link
              to="/"
              className="transition hover:text-emerald-600"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              to="/catalogue"
              className="transition hover:text-emerald-600"
            >
              Catalogue
            </Link>

            <ChevronRight size={15} />

            <span className="text-emerald-700">
              {product.category}
            </span>
          </nav>
        </div>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <Link
          to="/catalogue"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-600"
        >
          <ArrowLeft size={17} />
          Back to catalogue
        </Link>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="rounded-2xl bg-[#f5f7f8] p-3 sm:p-5">
            <ProductImage product={product} />

            <div className="flex items-center justify-center gap-2 border-t border-gray-200 py-4 text-sm text-slate-500">
              <ShieldCheck
                size={18}
                className="text-emerald-600"
              />
              Industrial product information
            </div>
          </div>

          {/* Product information */}
          <div className="pt-2 lg:pt-8">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
              {product.category}
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#303438] sm:text-4xl lg:text-[46px]">
              {product.name}
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />

            <p className="mt-7 text-base leading-8 text-[#737c84] sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8 border-y border-gray-200 py-6">
              <h2 className="mb-4 text-lg font-bold">
                Product overview
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <FlaskConical
                      size={21}
                      className="text-emerald-600"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">
                      Product
                    </p>
                    <p className="mt-1 font-semibold">
                      {product.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-cyan-50 p-3">
                    <Layers3
                      size={21}
                      className="text-cyan-600"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">
                      Category
                    </p>
                    <p className="mt-1 font-semibold">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mt-7">
              <h2 className="text-lg font-bold">
                Application scope
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.scopes.map((scope) => (
                  <span
                    key={scope}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#555e65]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500"
                    />
                    {scope}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact action */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:sales@yourcompany.com?subject=${encodeURIComponent(
                  `Product enquiry: ${product.name}`
                )}&body=${encodeURIComponent(
                  `Hello,\n\nI would like to enquire about ${product.name}.\n\nPlease provide further product information, specifications, availability and pricing.\n\nThank you.`
                )}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 px-7 py-4 font-semibold text-white shadow-md shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail size={19} />
                Enquire about this product
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/catalogue"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-4 font-semibold transition hover:border-emerald-500 hover:text-emerald-700"
              >
                View all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-[#f7f9fa]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
                  Explore more
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Related products
                </h2>
              </div>

              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                All products
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/catalogue/${item.id}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-48 items-center justify-center p-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="border-t border-gray-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                      View product
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
