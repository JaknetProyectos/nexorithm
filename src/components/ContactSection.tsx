"use client";

import { useState } from "react";
import { Check, Loader2, AlertCircle, Send } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contactSection");

  const { sendContactForm, isLoading } = useContact();

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const benefits = [
    t("benefits.platform"),
    t("benefits.support"),
    t("benefits.consultation"),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus({ type: null, message: null });

    const result = await sendContactForm(formData);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: t("messages.success"),
      });

      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } else {
      setSubmitStatus({
        type: "error",
        message: result.error || t("messages.error"),
      });
    }
  };

  return (
    <section className="relative bg-[#0b0f12] overflow-hidden py-24 md:py-32">
      {/* Background blobs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#005e50]/20 blur-[130px] pointer-events-none" />

      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#cdef24]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="text-left">
          <span className="text-xs font-bold tracking-widest text-[#cdef24] uppercase bg-[#cdef24]/10 px-4 py-1.5 rounded-full border border-[#cdef24]/20 inline-block mb-4">
            {t("badge")}
          </span>

          <h2 className="font-poppins text-[38px] font-bold leading-[1.1] text-white md:text-[48px] tracking-tight">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-slate-300">
            {t("description")}
          </p>

          <ul className="mt-10 space-y-6">
            {benefits.map((b, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#005e50]/20 border border-[#005e50]/40 text-[#cdef24] transition-colors duration-300 group-hover:bg-[#005e50]/40">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>

                <p className="font-body text-[15px] leading-relaxed text-slate-300">
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="rounded-[2.5rem] bg-slate-900/40 p-8 md:p-10 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative">
          {submitStatus.type === "success" ? (
            <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center p-4 animate-fadeIn">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#cdef24]/10 border border-[#cdef24]/30 shadow-[0_0_20px_rgba(205,239,36,0.15)]">
                <Check className="h-8 w-8 text-[#cdef24]" strokeWidth={2.5} />
              </div>

              <p className="font-poppins text-2xl font-bold text-white tracking-tight">
                {submitStatus.message}
              </p>

              <button
                onClick={() =>
                  setSubmitStatus({ type: null, message: null })
                }
                className="mt-8 text-sm font-semibold text-[#005e50] hover:text-[#cdef24] transition-colors duration-200"
              >
                {t("sendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-2">
                <h3 className="font-poppins text-xl font-bold text-white tracking-tight">
                  {t("form.title")}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {t("form.subtitle")}
                </p>
              </div>

              {submitStatus.type === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-[#0b0f12]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 transition-all"
                    placeholder={t("form.namePlaceholder")}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-1.5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0b0f12]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 transition-all"
                    placeholder={t("form.emailPlaceholder")}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full bg-[#0b0f12]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 transition-all"
                  placeholder={t("form.subjectPlaceholder")}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-1.5">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full bg-[#0b0f12]/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 transition-all resize-none"
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#cdef24] text-[#0b0f12] font-semibold text-sm transition-all duration-300 hover:bg-[#b8d71f] hover:shadow-[0_0_20px_rgba(205,239,36,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{t("form.sending")}</span>
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
  );
}