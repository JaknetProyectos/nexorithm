"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingCart,
  Menu,
  X,
  House,
  Boxes,
  MessageCircleMore,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  const links = [
    {
      label: t("nav.home"),
      href: "/",
      icon: House,
    },
    {
      label: t("nav.packages"),
      href: "/paquetes",
      icon: Boxes,
    },
    {
      label: t("nav.contact"),
      href: "/contacto",
      icon: MessageCircleMore,
    },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="inset-x-0 top-0 z-50">
      <div
        className="
          mx-auto
          flex
          h-[78px]
          max-w-[1280px]
          items-center
          justify-between
          bg-black
          backdrop-blur-2xl
          px-5
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
          lg:px-8
          relative
          overflow-hidden
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={t("logoAlt")}
          className="relative z-10 flex items-center gap-3"
        >
          <Image
            src="/logo-dark.png"
            width={80}
            height={60}
            alt={t("logoAlt")}
            className="h-[54px] w-auto object-contain"
          />

          <Image
            src="/title-dark.png"
            width={80}
            height={60}
            alt={t("titleAlt")}
            className="h-[54px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative z-10 hidden items-center gap-3 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-5
                  py-2.5
                  text-[15px]
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  ${
                    active
                      ? "bg-gradient-to-r from-[#cdef24] to-[#9bc91c] text-black shadow-[0_0_20px_rgba(205,239,36,0.35)]"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="relative z-10">{link.label}</span>

                {!active && (
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                      bg-gradient-to-r
                      from-[#005e50]/20
                      to-[#cdef24]/10
                    "
                  />
                )}
              </Link>
            );
          })}

          {/* Cart */}
          <Link
            href="/carrito"
            aria-label={t("cart")}
            className="
              relative
              ml-2
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:border-[#cdef24]/40
              hover:bg-[#cdef24]/10
              hover:text-[#cdef24]
            "
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={2.2} />

            {itemCount > 0 && (
              <div
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  min-w-[20px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#cdef24]
                  px-1
                  text-[11px]
                  font-bold
                  text-black
                "
              >
                {itemCount}
              </div>
            )}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-white
            transition-all
            duration-300
            hover:border-[#cdef24]/40
            hover:bg-[#cdef24]/10
            md:hidden
          "
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="
              mx-auto
              mt-3
              flex
              max-w-[1280px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#07110d]/95
              backdrop-blur-2xl
              p-4
              shadow-[0_8px_40px_rgba(0,0,0,0.45)]
              md:hidden
            "
          >
            {links.map((link) => {
              const active = isActive(link.href);

              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    mb-2
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-[#cdef24] to-[#9bc91c] text-black"
                        : "bg-white/[0.03] text-white/80 hover:bg-white/[0.06]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </div>
                </Link>
              );
            })}

            <Link
              href="/carrito"
              onClick={() => setOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-[#cdef24]/20
                bg-[#cdef24]/10
                px-4
                py-4
                text-white
              "
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-[#cdef24]" />
                <span>{t("cart")}</span>
              </div>

              <div
                className="
                  flex
                  h-7
                  min-w-[28px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#cdef24]
                  px-2
                  text-sm
                  font-bold
                  text-black
                "
              >
                {itemCount}
              </div>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}