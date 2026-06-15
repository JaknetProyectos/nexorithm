"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

import {
  X,
  CheckCircle2,
  Info,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type AlertType =
  | "error"
  | "success"
  | "warning"
  | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}

interface AlertContextType {
  showAlert: (
    options: AlertOptions
  ) => void;
  hideAlert: () => void;
}

const AlertContext =
  createContext<
    AlertContextType | undefined
  >(undefined);

export function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  const [options, setOptions] =
    useState<AlertOptions | null>(
      null
    );

  const showAlert = useCallback(
    (opts: AlertOptions) => {
      setOptions(opts);
      setIsOpen(true);
    },
    []
  );

  const hideAlert = useCallback(() => {
    setIsOpen(false);

    if (options?.onClose) {
      options.onClose();
    }

    setTimeout(() => {
      setOptions(null);
    }, 200);
  }, [options]);

  const type =
    options?.type || "info";

  const DefaultIcon =
    type === "success"
      ? CheckCircle2
      : type === "error"
        ? ShieldAlert
        : type === "warning"
          ? AlertTriangle
          : Info;

  // Mapas estéticos reactivos para mantener la UI limpia y declarativa
  const themeMap = {
    success: {
      border: "border-emerald-500/30 shadow-emerald-500/5",
      text: "text-emerald-400",
      glow: "from-emerald-500/5 to-transparent",
      btn: "bg-[#cdef24] hover:bg-[#b8d71f] text-[#0b0f12] shadow-[0_0_20px_rgba(205,239,36,0.15)]",
    },
    error: {
      border: "border-red-500/30 shadow-red-500/5",
      text: "text-red-400",
      glow: "from-red-500/5 to-transparent",
      btn: "bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    },
    warning: {
      border: "border-amber-500/30 shadow-amber-500/5",
      text: "text-amber-400",
      glow: "from-amber-500/5 to-transparent",
      btn: "bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    },
    info: {
      border: "border-cyan-500/30 shadow-cyan-500/5",
      text: "text-cyan-400",
      glow: "from-cyan-500/5 to-transparent",
      btn: "bg-[#cdef24] hover:bg-[#b8d71f] text-[#0b0f12] shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    },
  };

  const currentTheme = themeMap[type];

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        hideAlert,
      }}
    >
      {children}

      {isOpen && options && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 selection:bg-[#cdef24] selection:text-[#0b0f12]">
          {/* Overlay Oscuro Semitransparente con Blur inmersivo */}
          <div
            onClick={hideAlert}
            className="absolute inset-0 bg-[#0b0f12]/80 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Contenedor Modal (Glassmorphism de alta densidad) */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-title"
            className={cn(
              "relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200",
              currentTheme.border
            )}
          >
            {/* Gradiente sutil de fondo reactivo al estatus */}
            <div className={cn("absolute inset-0 -z-10 h-48", currentTheme.glow)} />

            {/* Header del Sistema */}
            <div className="flex items-center justify-between border-b border-slate-800/60 bg-[#0b0f12] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/40 border border-red-500/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/40 border border-amber-500/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
              </div>

              <button
                onClick={hideAlert}
                className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-500 transition-all hover:bg-slate-800 hover:text-white"
                aria-label="Close alert"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="relative p-6 sm:p-8">
              <div className="relative z-10">
                
                {/* Contenedor del Icono */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-slate-800 bg-[#0b0f12] shadow-inner">
                    <div className={currentTheme.text}>
                      {options.icon || (
                        <DefaultIcon className="h-9 w-9 stroke-[1.75]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Vista previa de Imagen (si aplica) */}
                {options.image && (
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-[#0b0f12]">
                    <Image
                      src={options.image}
                      alt="Alert visual attachment"
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                )}

                {/* Textos Informativos */}
                <div className="mb-6 text-center space-y-2">
                  <h3
                    id="alert-title"
                    className="font-poppins text-xl font-bold tracking-tight text-white"
                  >
                    {options.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-400 font-body px-1">
                    {options.message}
                  </p>
                </div>

                {/* Botón de Confirmación / Acción Única */}
                <button
                  onClick={hideAlert}
                  className={cn(
                    "flex h-14 w-full items-center justify-center rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5",
                    currentTheme.btn
                  )}
                >
                  {options.confirmText || "Continuar"}
                </button>

                {/* Micro Footer Técnico */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-mono tracking-wider text-slate-600">
                  <div className="h-1 w-1 rounded-full bg-slate-800" />
                  <span>SYSTEM_STATUS_ACTIVE</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error(
      "useAlert must be used within AlertProvider"
    );
  }

  return context;
};