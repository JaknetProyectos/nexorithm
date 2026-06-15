"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactFormFramed() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-aqua-grad rounded-lg p-2.5 shadow-[0_30px_60px_-25px_rgba(43,160,235,0.55)]">
      <div className="rounded-md bg-white p-7 md:p-10">
        {sent ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-df-green/15">
              <Check className="h-7 w-7 text-df-green" strokeWidth={3} />
            </span>
            <p className="font-poppins text-xl font-semibold text-[#2b3041]">
              ¡Mensaje enviado!
            </p>
            <p className="mt-2 text-[15px] text-[#747783]">
              Gracias por contactarnos, te responderemos muy pronto.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5"
          >
            <input className="df-field" placeholder="Nombre" required />
            <input className="df-field" type="email" placeholder="Email" required />
            <input className="df-field" placeholder="Asunto" />
            <textarea
              className="df-field resize-none"
              placeholder="Mensaje"
              rows={6}
            />
            <div className="flex justify-end pt-2">
              <button type="submit" className="df-btn df-btn-blue">
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
