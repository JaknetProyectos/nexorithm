import { Link } from "@/i18n/routing";
import { ChevronRight, Shield, Server, Headphones } from "lucide-react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  const featureCards = [
    {
      icon: Headphones,
      title: t("features.support.title"),
      text: t("features.support.text"),
      gradient: "from-[#005e50]/20 to-[#cdef24]/5",
      iconColor: "text-[#cdef24]",
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      text: t("features.security.text"),
      gradient: "from-[#005e50]/30 to-[#005e50]/5",
      iconColor: "text-[#005e50]",
    },
    {
      icon: Server,
      title: t("features.hosting.title"),
      text: t("features.hosting.text"),
      gradient: "from-[#cdef24]/20 to-[#005e50]/5",
      iconColor: "text-[#cdef24]",
    },
  ];

  const illustrationSections = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      eyebrow: t("illustrations.hosting.eyebrow"),
      title: t("illustrations.hosting.title"),
      text: t("illustrations.hosting.text"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1526546334624-2afe5b01088d?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      eyebrow: t("illustrations.support.eyebrow"),
      title: t("illustrations.support.title"),
      text: t("illustrations.support.text"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      eyebrow: t("illustrations.development.eyebrow"),
      title: t("illustrations.development.title"),
      text: t("illustrations.development.text"),
    },
  ];

  return (
    <main className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] overflow-x-hidden">
      <Header />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-[100px] pb-16 md:pb-24">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#005e50]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#cdef24]/10 blur-[150px] pointer-events-none" />

        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="font-poppins text-[44px] font-bold leading-[1.1] text-white sm:text-[54px] lg:text-[64px] tracking-tight">
              {t.rich("hero.title", {
                span: (chunks) => (
                  <span className="bg-gradient-to-r from-[#cdef24] to-[#005e50] bg-clip-text text-transparent">
                    {chunks}
                  </span>
                ),
              })}
            </h1>

            <p className="mt-6 max-w-[520px] mx-auto lg:mx-0 text-[16px] md:text-[18px] leading-[1.7] text-slate-300">
              {t.rich("hero.description", {
                strong: (chunks) => (
                  <span className="text-white font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[2.5rem] bg-gradient-to-tr from-[#005e50]/40 via-slate-900/40 to-[#cdef24]/20 p-1 backdrop-blur-sm border border-slate-800/80 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0f12]/80 z-10" />

              <img
                src="https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("hero.imageAlt")}
                className="absolute inset-0 w-full h-full object-cover z-0 transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-900 max-w-[1200px] mx-auto px-6" />

      {/* ---------- Feature cards ---------- */}
      <section className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t("featuresSection.title")}
            </h2>

            <p className="mt-4 text-slate-400">
              {t("featuresSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featureCards.map((card) => {
              const IconComponent = card.icon;

              return (
                <div
                  key={card.title}
                  className={`flex flex-col items-start rounded-[2rem] border border-slate-800/60 bg-gradient-to-br ${card.gradient} p-8 md:p-10 transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 group`}
                >
                  <div
                    className={`p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 ${card.iconColor} shadow-inner`}
                  >
                    <IconComponent className="h-7 w-7" strokeWidth={2} />
                  </div>

                  <h3 className="mt-8 font-poppins text-2xl font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-slate-300 flex-grow">
                    {card.text}
                  </p>

                  <Link
                    href="/paquetes"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#cdef24] hover:text-white transition-colors duration-200 group-hover:translate-x-1 transform native-bezier"
                  >
                    {t("learnMore")}{" "}
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Illustration sections ---------- */}
      <section className="pb-24 pt-6 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {illustrationSections.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center text-center bg-slate-900/20 border border-slate-900 p-8 rounded-[2.5rem] backdrop-blur-sm hover:bg-slate-900/40 transition-colors duration-300"
              >
                <div className="flex h-[200px] w-full items-center justify-center bg-gradient-to-b from-slate-900/50 to-transparent rounded-3xl p-4 mb-6">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="max-h-[180px] rounded-xl w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,94,80,0.2)]"
                  />
                </div>

                <span className="text-xs font-bold tracking-widest text-[#005e50] uppercase bg-[#005e50]/10 px-3 py-1 rounded-full border border-[#005e50]/20">
                  {s.eyebrow}
                </span>

                <h3 className="mt-4 font-poppins text-2xl font-bold leading-tight text-white tracking-tight min-h-[64px] flex items-center">
                  {s.title}
                </h3>

                <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-slate-400 flex-grow">
                  {s.text}
                </p>

                <Link
                  href="/paquetes"
                  className="w-full mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-medium text-sm transition-all duration-200 hover:bg-[#005e50] hover:text-white hover:border-transparent"
                >
                  {t("learnMore")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <div className="relative z-10">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}