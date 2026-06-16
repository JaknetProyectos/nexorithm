"use client";

import { Link } from "@/i18n/routing";
import { Check, Cpu, Zap, Layers, Sparkles, ShoppingCart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

import { Plan } from "@/types/plan";
import { topPlansEnglish, topPlansSpanish, plansEnglish, plansSpanish } from "@/data/plans";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

function PlanCard({
  plan,
  isFeatured = false,
}: {
  plan: Plan;
  isFeatured?: boolean;
}) {
  const t = useTranslations("plansPage");
  const { addItem } = useCart();

  // Asignación de estilos dinámicos basados en la estética Material Expressive
  const cardBorder = isFeatured
    ? "border-[#cdef24]/40 bg-gradient-to-b from-[#005e50]/30 via-slate-900/40 to-[#0b0f12] shadow-[0_20px_40px_-15px_rgba(205,239,36,0.1)]"
    : "border-slate-800/80 bg-slate-900/30 hover:border-slate-700";

  const nameColor = isFeatured ? "text-[#cdef24]" : "text-white";

  // Iconos conceptuales según jerarquía de planes
  const PlanIcon = isFeatured ? Zap : plan.accent === "green" ? Cpu : Layers;

  return (
    <div
      className={`flex flex-col rounded-[2rem] border p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md group ${cardBorder}`}
    >
      <div className="flex items-center justify-between w-full mb-6">
        <h3
          className={`font-poppins text-xl font-bold tracking-tight ${nameColor}`}
        >
          {plan.name}
        </h3>

        <div
          className={`p-3 rounded-xl ${isFeatured
              ? "bg-[#cdef24]/10 text-[#cdef24]"
              : "bg-slate-900 text-[#005e50]"
            }`}
        >
          <PlanIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-2 flex flex-baseline items-baseline font-poppins text-white">
        <span className="text-xl font-medium text-slate-400 mr-1">$</span>

        <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {formatPrice(plan.price)}
        </span>

        <span className="text-xs font-semibold text-slate-400 ml-2 uppercase tracking-wider">
          {t("pricing.currency")}
        </span>
      </div>

      {/* Listado de características con check estilizado */}
      <ul className="mt-8 space-y-4 flex-1 text-[14px] text-slate-300 font-body">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`h-4 w-4 shrink-0 mt-0.5 ${isFeatured ? "text-[#cdef24]" : "text-[#005e50]"
                }`}
              strokeWidth={3}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Botón de acción reactivo */}
      <button
        onClick={() => {
          addItem(
            {
              icon: "/logo-dark.png",
              name: plan.name,
              price: plan.price,
              slug: plan.name,
            },
            1
          );
        }}
        className={`w-full mt-10 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${isFeatured
            ? "bg-[#cdef24] text-[#0b0f12] hover:bg-[#b8d71f] hover:shadow-[0_0_20px_rgba(205,239,36,0.3)]"
            : "bg-slate-900 text-white border border-slate-800 hover:bg-[#005e50] hover:border-transparent"
          }`}
      >
        <ShoppingCart className="h-4 w-4" />
        {t("buttons.hirePlan")}
      </button>
    </div>
  );
}

export default function PaquetesPage() {
  const t = useTranslations("plansPage");
  const locale = useLocale()
  const plans = locale == "es" ? plansSpanish : plansEnglish;
  const topPlans = locale == "es" ? topPlansSpanish : topPlansEnglish;

  return (
    <main className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] overflow-x-hidden">
      <Header />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-[120px] pb-24 md:pb-32 bg-gradient-to-b from-[#005e50]/20 to-transparent">
        {/* Luces de fondo Expresivas */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#005e50]/20 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#cdef24]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-poppins text-[46px] font-extrabold leading-[1.1] text-white sm:text-[56px] tracking-tight">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-[480px] mx-auto lg:mx-0 text-[16px] md:text-[18px] leading-relaxed text-slate-300">
              {t.rich("hero.description", {
                strong: (chunks) => (
                  <span className="text-white font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-square rounded-[3rem] bg-gradient-to-tr from-[#005e50]/30 to-[#cdef24]/10 border border-slate-800/60 backdrop-blur-sm overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1687205277710-917f17455904?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("hero.imageAlt")}
                className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,94,80,0.3)] animate-pulse [animation-duration:8s]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Precios e Infraestructura ---------- */}
      <section className="py-12 pb-28 relative z-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {t("pricing.title")}
            </h2>

            <p className="mt-4 text-slate-400 text-sm md:text-base">
              {t("pricing.description")}
            </p>
          </div>

          {/* Grilla Principal de Precios */}
          <div className="space-y-12">
            {/* Planes Destacados (Top) */}
            <div className="grid gap-8 md:grid-cols-2">
              {topPlans.map((p) => (
                <PlanCard key={p.name} plan={p} isFeatured={true} />
              ))}
            </div>

            {/* Resto de los Planes Estándar */}
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>

            {/* Tarjeta de Plan Personalizado / A la Medida */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-r from-slate-900/60 via-[#005e50]/10 to-slate-900/60 p-8 md:p-12 lg:p-16 text-center backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Sparkles className="h-12 w-12 text-[#cdef24]" />
              </div>

              <span className="text-xs font-bold tracking-widest text-[#005e50] uppercase bg-[#005e50]/20 px-3 py-1 rounded-full border border-[#005e50]/30 inline-block mb-4">
                {t("custom.badge")}
              </span>

              <h3 className="font-poppins text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                {t("custom.title")}
              </h3>

              <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-y border-slate-800/80 py-8 text-[14px] text-slate-300 font-body">
                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-[#cdef24]">1.</span>
                    {t("custom.steps.quote.title")}
                  </h4>

                  <p className="text-slate-400">
                    {t("custom.steps.quote.description")}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-[#cdef24]">2.</span>
                    {t("custom.steps.payment.title")}
                  </h4>

                  <p className="text-slate-400">
                    {t("custom.steps.payment.description")}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="text-[#cdef24]">3.</span>
                    {t("custom.steps.deploy.title")}
                  </h4>

                  <p className="text-slate-400">
                    {t("custom.steps.deploy.description")}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#005e50] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#00483d] hover:shadow-[0_0_20px_rgba(0,94,80,0.3)]"
                >
                  {t("buttons.requestQuote")}
                </Link>

                <Link href="/cotizar">
                  <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 font-medium text-sm transition-all duration-300 hover:bg-slate-800 hover:text-white">
                    {t("buttons.payExistingOrder")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <ContactSection />

      <Footer />
    </main>
  );
}