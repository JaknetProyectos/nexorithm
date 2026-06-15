"use client";

import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContact } from "@/hooks/useContact";

export default function ContactoPage() {
  const t = useTranslations("contactPage");

  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");

    const result = await sendContactForm(formData);

    if (result.success) {
      setSuccess(true);

      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } else {
      setError(result.error || t("form.error"));
    }
  };

  return (
    <div className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] overflow-x-hidden">
      <Header />

      {/* ---------- Map Section ---------- */}
      <section className="relative pt-[80px] w-full">
        <div className="relative h-[450px] w-full overflow-hidden border-b border-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f12] via-transparent to-[#0b0f12] z-10 pointer-events-none opacity-90" />

          <iframe
            title={t("map.title")}
            src="https://maps.google.com/maps?q=Avenida%20Insurgentes%201677,%20Oficina%20806-B,%20Col%20Guadalupe%20Inn&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0 grayscale invert opacity-40 contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Floating Card */}
        <div className="relative z-20 mx-auto -mt-32 max-w-[900px] px-6">
          <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-8 md:p-10 text-center md:text-left backdrop-blur-xl shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#005e50] uppercase bg-[#005e50]/20 px-3 py-1 rounded-full border border-[#005e50]/30">
                {t("office.badge")}
              </span>

              <h3 className="font-poppins text-2xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-5 w-5 text-[#cdef24]" />

                {t("office.city")}
              </h3>

              <p className="text-sm leading-relaxed text-slate-300 font-body">
                {t("office.addressLine1")}
                <br />
                {t("office.addressLine2")}
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8 text-xs text-slate-400 font-mono">
              <a
                href="mailto:contacto@nexorithm.com.mx"
                className="flex items-center gap-2.5 hover:text-[#cdef24] transition group justify-center md:justify-start"
              >
                <Mail className="h-4 w-4 text-[#005e50] group-hover:text-[#cdef24]" />

                contacto@nexorithm.com.mx
              </a>

              <a
                href="tel:+525585261677"
                className="flex items-center gap-2.5 hover:text-[#cdef24] transition group justify-center md:justify-start"
              >
                <Phone className="h-4 w-4 text-[#005e50] group-hover:text-[#cdef24]" />

                +52 (55) 8526-1677
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contact Form ---------- */}
      <section className="py-24 relative z-10">
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#005e50]/10 blur-[130px] pointer-events-none -z-10" />

        <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#cdef24]/5 blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Side Information */}
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005e50]">
              {t("sidebar.badge")}
            </span>

            <h2 className="font-poppins text-4xl font-extrabold leading-tight text-white tracking-tight sm:text-5xl">
              {t("sidebar.title")}
            </h2>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md mx-auto lg:mx-0 font-body">
              {t("sidebar.description")}
            </p>
          </div>

          {/* Form */}
          <div className="bg-slate-900/20 border border-slate-800/80 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            {success ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#005e50]/20 text-[#cdef24] flex items-center justify-center mb-4 mx-auto border border-[#005e50]/40 shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-poppins text-2xl font-bold text-white tracking-tight">
                  {t("success.title")}
                </h3>

                <p className="text-sm text-slate-400 max-w-sm mx-auto font-body">
                  {t("success.description")}
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold text-[#cdef24] hover:underline"
                  >
                    {t("success.button")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-500" />

                    <span>{error}</span>
                  </div>
                )}

                <div className="grid gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="nombre"
                      className="text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                    >
                      {t("form.nameLabel")}
                    </label>

                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder={t("form.namePlaceholder")}
                      className="h-14 w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                    >
                      {t("form.emailLabel")}
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("form.emailPlaceholder")}
                      className="h-14 w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="asunto"
                      className="text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                    >
                      {t("form.subjectLabel")}
                    </label>

                    <input
                      id="asunto"
                      type="tel"
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder={t("form.subjectPlaceholder")}
                      className="h-14 w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="mensaje"
                    className="text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                  >
                    {t("form.messageLabel")}
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 p-5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${isLoading
                        ? "bg-slate-800 text-slate-500 cursor-wait"
                        : "bg-[#cdef24] text-[#0b0f12] hover:bg-[#b8d71f] hover:shadow-[0_0_25px_rgba(205,239,36,0.3)] hover:-translate-y-0.5"
                      }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />

                        <span>{t("form.loading")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("form.submit")}</span>

                        <Send className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}