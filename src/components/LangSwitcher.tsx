"use client";

import { Flag, Languages, Speaker } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const nextLang = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLang)}
      disabled={isPending}
      aria-label="Cambiar idioma"
      className="
        fixed bottom-6 left-6 z-50

        flex items-center gap-3

        rounded-2xl
        border border-lime-400/20

        bg-black/90
        backdrop-blur-xl

        px-4 py-3

        shadow-[0_0_30px_rgba(163,230,53,0.12)]

        transition-all duration-300 ease-out

        hover:scale-[1.03]
        hover:border-lime-300/40
        hover:shadow-[0_0_45px_rgba(163,230,53,0.22)]

        active:scale-[0.97]

        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {/* Icon */}
      <div
        className="
          fixed

          flex h-10 w-10 items-center justify-center

          rounded-xl

          bg-gradient-to-br
          from-lime-300
          to-green-400

          shadow-[0_0_20px_rgba(163,230,53,0.35)]

          transition-all duration-300

          group-hover:rotate-6
        "
      >
        <Flag/>
      </div>

      {/* Spacer for fixed icon */}
      <div className="w-10" />

      {/* Text */}
      <div className="flex flex-col items-start leading-none">
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-lime-400/70
          "
        >
          LANG
        </span>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            {locale === "es" ? "Español" : "English"}
          </span>

          <div
            className="
              rounded-full
              border border-lime-400/20
              bg-lime-400/10

              px-2 py-0.5

              text-[10px]
              font-black
              text-lime-300
            "
          >
            {locale.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Status */}
      <div
        className={`
          h-2.5 w-2.5 rounded-full
          transition-all duration-300

          ${
            isPending
              ? "bg-lime-300 animate-pulse shadow-[0_0_10px_rgba(190,242,100,0.8)]"
              : "bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"
          }
        `}
      />
    </button>
  );
}