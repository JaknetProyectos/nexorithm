"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
} from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");

  const router = useRouter();

  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");

  const [totalPrice, setTotalPrice] = useState<number | "">("");

  const [isAdding, setIsAdding] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    addItem(
      {
        icon: "/logo-dark.png",
        name: `Custom - ${folioUpper}`,
        price: finalPrice,
        slug: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);

      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] overflow-x-hidden">
      <Header />

      <main className="relative pb-24 pt-[120px]">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#005e50]/15 blur-[150px] pointer-events-none" />

        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#cdef24]/5 blur-[130px] pointer-events-none" />

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 relative z-10">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#005e50]/20 border border-[#005e50]/40 text-[#cdef24] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
              {t("hero.badge")}
            </span>

            <h1 className="font-poppins text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-slate-900/20 shadow-2xl backdrop-blur-xl lg:grid-cols-[400px_1fr]">
            {/* LEFT PANEL */}
            <div className="relative overflow-hidden border-b border-slate-800/80 bg-slate-900/40 p-8 flex flex-col justify-between items-center text-center lg:border-b-0 lg:border-r lg:text-left lg:items-start">
              <div className="absolute inset-0 bg-gradient-to-b from-[#005e50]/10 to-transparent pointer-events-none" />

              <div className="relative w-full flex flex-col items-center lg:items-start">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-[#0b0f12]/80 border border-slate-800 p-4 shadow-inner">
                  <Image
                    src="/logo-dark.png"
                    width={120}
                    height={120}
                    alt={t("imageAlt")}
                    className="object-contain"
                  />
                </div>

                <h2 className="mt-8 font-poppins text-2xl font-bold tracking-tight text-white">
                  {t("authorized.title")}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {t("authorized.description")}
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="max-w-2xl">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#005e50]">
                    {t("form.badge")}
                  </p>

                  <h2 className="mt-2 font-poppins text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {t("form.title")}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  {/* ERROR */}
                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake">
                      <AlertCircle className="h-5 w-5 shrink-0" />

                      <span>{error}</span>
                    </div>
                  )}

                  {/* QUOTE NUMBER */}
                  <div className="space-y-2">
                    <label
                      htmlFor="quoteNumber"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      {t("form.quoteLabel")}
                    </label>

                    <input
                      id="quoteNumber"
                      type="text"
                      required
                      placeholder={t("form.quotePlaceholder")}
                      value={quoteNumber}
                      onChange={(e) => setQuoteNumber(e.target.value)}
                      className="h-14 w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-5 text-sm font-mono uppercase tracking-widest text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                    />
                  </div>

                  {/* AMOUNT */}
                  <div className="space-y-2">
                    <label
                      htmlFor="totalPrice"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      {t("form.amountLabel")}
                    </label>

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-[#005e50]">
                        <DollarSign className="h-4 w-4" />
                      </div>

                      <input
                        id="totalPrice"
                        type="number"
                        required
                        step="0.01"
                        min="0.01"
                        placeholder={t("form.amountPlaceholder")}
                        value={totalPrice}
                        onChange={(e) =>
                          setTotalPrice(
                            e.target.value !== ""
                              ? Number(e.target.value)
                              : ""
                          )
                        }
                        className="h-14 w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 pl-11 pr-16 text-sm font-semibold text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                      />

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                        <span className="text-xs font-bold text-slate-500 tracking-wider">
                          MXN
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 pl-1">
                      {t("form.taxNote")}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isAdding}
                      className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                        isAdding
                          ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                          : "bg-[#cdef24] text-[#0b0f12] hover:bg-[#b8d71f] hover:shadow-[0_0_25px_rgba(205,239,36,0.3)] hover:-translate-y-0.5"
                      }`}
                    >
                      {isAdding ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />

                          <span>{t("buttons.adding")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("buttons.addToCart")}</span>

                          <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}