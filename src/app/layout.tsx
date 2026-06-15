import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./[locale]/ClientBody";

// Configuración de las fuentes de Google
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexorithm — Hosting Web de Alta Performance y Desarrollo Seguro",
  description:
    "Dale a tu sitio la velocidad, seguridad y el soporte 24/7 que merece con nuestra infraestructura de hosting confiable y escalable en México.",
  metadataBase: new URL("https://nexorithm.com.mx"),
  keywords: ["hosting web", "desarrollo web", "hosting mexico", "infraestructura digital", "nexorithm"],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Nexorithm — Hosting Web de Alta Performance",
    description: "Infraestructura web escalable y desarrollo de aplicaciones seguro.",
    url: "https://nexorithm.com.mx",
    siteName: "Nexorithm",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`dark ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        {/* Aquí puedes añadir etiquetas adicionales si las necesitas */}
      </head>
      <body 
        suppressHydrationWarning 
        className="antialiased font-body bg-[#0b0f12] text-slate-100 selection:bg-[#cdef24] selection:text-[#0b0f12]"
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}