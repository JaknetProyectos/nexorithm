import { Link } from "@/i18n/routing";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const legalLinks = [
    t("legal.privacy"),
    t("legal.terms"),
    t("legal.refunds"),
  ];

  return (
    <footer className="relative bg-[#080b0d] border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#005e50]/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 py-16 relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 items-start">
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo-dark.png"
              alt={t("logoAlt")}
              className="h-[50px] w-auto object-contain brightness-110"
            />

            <img
              src="/title-dark.png"
              alt={t("titleAlt")}
              className="h-[50px] w-auto object-contain brightness-110"
            />

            <p className="text-xs text-slate-500 max-w-[240px] text-center md:text-left mt-2">
              {t("description")}
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 font-poppins">
            <h4 className="text-sm font-bold tracking-wider text-[#005e50] uppercase bg-[#005e50]/10 px-3 py-1 rounded-full border border-[#005e50]/20 inline-block mb-2">
              {t("contact")}
            </h4>

            <div className="flex items-start gap-3 text-slate-300 text-[14px] leading-relaxed max-w-[320px]">
              <MapPin className="h-5 w-5 text-[#cdef24] shrink-0 mt-0.5" />

              <span>{t("address")}</span>
            </div>

            <Link
              href="mailto:clientes@nexorithm.com.mx"
              className="group flex items-center gap-3 text-[14px] text-slate-300 transition-colors hover:text-[#cdef24] break-all"
            >
              <Mail className="h-5 w-5 text-[#005e50] shrink-0 group-hover:text-[#cdef24] transition-colors" />

              <span>clientes@nexorithm.com.mx</span>
            </Link>

            <Link
              href="tel:525591333573"
              className="group flex items-center gap-3 text-[14px] text-slate-300 transition-colors hover:text-[#cdef24]"
            >
              <Phone className="h-5 w-5 text-[#005e50] shrink-0 group-hover:text-[#cdef24] transition-colors" />

              <span>55 9133 3573</span>
            </Link>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-col items-center md:items-end gap-3.5 w-full">
              <Link
                href="/legal/privacidad"
                className="group inline-flex items-center gap-1.5 font-poppins text-[13px] font-medium text-slate-400 tracking-wide transition-all hover:text-white md:text-right"
              >
                {t("legal.privacy")}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-[#cdef24] transition-all transform translate-y-0.5" />
              </Link>
              <Link
                href="/legal/terminos"
                className="group inline-flex items-center gap-1.5 font-poppins text-[13px] font-medium text-slate-400 tracking-wide transition-all hover:text-white md:text-right"
              >
                {t("legal.terms")}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-[#cdef24] transition-all transform translate-y-0.5" />
              </Link>
              <Link
                href="/legal/reembolsos"
                className="group inline-flex items-center gap-1.5 font-poppins text-[13px] font-medium text-slate-400 tracking-wide transition-all hover:text-white md:text-right"
              >
                {t("legal.refunds")}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-[#cdef24] transition-all transform translate-y-0.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-900 w-full flex justify-center md:justify-end">
              <div className="bg-slate-900/40 border border-slate-800/80 p-2 rounded-xl backdrop-blur-sm">
                <img
                  src="/cards.png"
                  alt={t("cardsAlt")}
                  className="h-[32px] w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="mt-16 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-poppins">
          <p>
            © {new Date().getFullYear()} nexorithm.com.mx.{" "}
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}