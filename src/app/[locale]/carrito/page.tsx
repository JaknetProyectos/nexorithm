"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { processEtominPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";

const VALID_COUPONS = [
  { code: "MED10", discount: 0.1 },
  { code: "CONFIANZA15", discount: 0.15 },
  { code: "PROMO20", discount: 0.2 },
];

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-slate-900/40 border border-slate-800/80 rounded-[2rem] shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-800/60 pb-3">
      <Icon className="w-4 h-4 text-[#cdef24]" />
      <h3 className="text-xs font-bold tracking-wider text-slate-200">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[11px] font-bold text-slate-400 block mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-4 py-3 text-xs text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 ${mono ? "font-mono tracking-widest" : ""
          } ${inputClassName}`}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();

  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };

    try {
      const response = await processEtominPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        try {
          await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
            }),
          });
        } catch (emailError) {
          console.error("⚠️ Falló el despacho de correos informativos:", emailError);
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(
          response.error || t("errors.declined")
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <div className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] flex flex-col justify-between">
        <Header />
        <section className="max-w-xl w-full mx-auto px-6 py-24 flex-1 flex flex-col justify-center items-center text-center relative z-10">
          <div className="absolute top-1/4 w-[400px] h-[400px] rounded-full bg-[#005e50]/10 blur-[100px] pointer-events-none -z-10" />

          <div className="w-16 h-16 rounded-full bg-[#005e50]/20 text-[#cdef24] flex items-center justify-center mb-6 border border-[#005e50]/40 shadow-xl backdrop-blur-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h1 className="font-poppins text-3xl font-extrabold text-white mb-3 tracking-tight">
            {t("success.title")}
          </h1>
          <p className="text-sm text-slate-400 mb-8 max-w-sm">
            {t("success.description")}
          </p>

          <CardShell className="p-6 text-left w-full space-y-4 mb-8 bg-slate-900/60 border-slate-800">
            <div className="flex justify-between text-xs pt-3 border-t border-slate-800/60">
              <span className="text-slate-400 font-medium">{t("success.transactionStatus")}</span>
              <span className="text-[11px] px-2.5 py-0.5 bg-[#005e50]/30 text-[#cdef24] font-bold rounded-full border border-[#005e50]/40">
                {t("success.approved")}
              </span>
            </div>
          </CardShell>

          <Link href="/paquetes" className="w-full">
            <Button className="w-full bg-[#cdef24] hover:bg-[#b8d71f] text-[#0b0f12] py-6 rounded-xl text-sm font-bold tracking-wide shadow-lg hover:shadow-[0_0_25px_rgba(205,239,36,0.25)] transition-all duration-300">
              {t("success.backToCatalog")}
            </Button>
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f12] text-slate-100 min-h-screen selection:bg-[#cdef24] selection:text-[#0b0f12] overflow-x-hidden">
      <Header />

      {/* STICKY NAV STEPS */}
      <div className="bg-[#0b0f12]/80 border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-white transition">
              {t("breadcrumb.home")}
            </Link>
            <span className="text-slate-700">/</span>
            <span className={step === 1 ? "text-[#cdef24] font-bold" : "text-slate-500"}>
              {t("breadcrumb.summary")}
            </span>
            <span className="text-slate-700">/</span>
            <span className={step === 2 ? "text-[#cdef24] font-bold" : "text-slate-500"}>
              {t("breadcrumb.shippingPayment")}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-[#cdef24]" : "bg-slate-800"}`} />
            <div className={`h-0.5 w-12 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#cdef24]" : "bg-slate-800"}`} />
            <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#cdef24]" : "bg-slate-800"}`} />
          </div>
        </div>
      </div>

      <section className="py-8 md:py-16 relative z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#005e50]/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {items.length === 0 ? (
            <CardShell className="p-16 text-center max-w-lg mx-auto bg-slate-900/20 border-slate-800/80">
              <ShoppingBag className="w-14 h-14 text-slate-800 mx-auto mb-5" />
              <h2 className="font-poppins text-xl font-bold text-white mb-2">
                {t("empty.title")}
              </h2>
              <p className="text-xs text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                {t("empty.description")}
              </p>
              <Link href="/paquetes">
                <Button className="bg-[#005e50] hover:bg-[#004d42] border border-[#007a68] text-white rounded-xl px-8 py-5 text-xs font-semibold shadow-md transition-all">
                  {t("empty.goToStore")}
                </Button>
              </Link>
            </CardShell>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 items-start">

              {/* MAIN CONTENT AREA */}
              <div className="lg:col-span-2 space-y-5">
                {errorMessage && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-semibold text-red-400 flex items-center gap-3 animate-shake">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* STEP 1: RESUMEN DE COMPRA */}
                {step === 1 && (
                  <div className="space-y-4">
                    <CardShell className="p-5 flex items-center justify-between border-slate-800/80 bg-slate-900/30">
                      <h2 className="text-xs font-bold text-white">
                        {t("order.title")}
                      </h2>
                      <button
                        type="button"
                        onClick={clearCart}
                        className="text-xs font-bold text-red-400 hover:text-red-300 transition flex items-center gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> {t("order.clear")}
                      </button>
                    </CardShell>

                    {items.map((item) => (
                      <CardShell key={item.product.slug} className="p-5 flex gap-5 border-slate-800/60 bg-slate-900/20 hover:border-slate-800 transition-colors duration-200">
                        <div className="w-20 h-20 bg-[#0b0f12]/60 border border-slate-800 rounded-2xl relative overflow-hidden flex-shrink-0 p-3 flex items-center justify-center">
                          <Image
                            src={item.product.icon}
                            alt={item.product.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div className="flex justify-between gap-4">
                            <div>
                              <span className="inline-block text-[9px] bg-[#005e50]/30 border border-[#005e50]/40 font-mono font-bold px-2 py-0.5 rounded-md text-[#cdef24]">
                                {item.product.slug}
                              </span>
                              <h3 className="font-poppins font-bold text-sm text-white line-clamp-1 mt-1.5">
                                {item.product.name}
                              </h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.slug)}
                              className="text-slate-600 hover:text-red-400 p-1 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center border border-slate-800 rounded-xl bg-[#0b0f12]/40 p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.slug, item.quantity - 1)
                                }
                                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-mono font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.slug, item.quantity + 1)
                                }
                                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-poppins font-extrabold text-sm text-white tracking-tight">
                              {formatPrice(item.product.price * item.quantity, "MXN", true)}
                            </span>
                          </div>
                        </div>
                      </CardShell>
                    ))}
                  </div>
                )}

                {/* STEP 2: FORMULARIOS DE CHECKOUT */}
                {step === 2 && (
                  <form
                    id="etomin-payment-form"
                    onSubmit={handleCheckoutSubmit}
                    className="space-y-6"
                  >
                    {/* DATOS COMPRADOR */}
                    <CardShell className="p-6 sm:p-8 space-y-5 border-slate-800/80 bg-slate-900/20">
                      <SectionTitle icon={User} title={t("form.buyerTitle")} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          label={t("form.firstName")}
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.lastName")}
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.email")}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.phone")}
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.company")}
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="sm:col-span-2"
                        />
                      </div>
                    </CardShell>

                    {/* DATOS ENVÍO / FACTURACIÓN */}
                    <CardShell className="p-6 sm:p-8 space-y-5 border-slate-800/80 bg-slate-900/20">
                      <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          label={t("form.streetAddress")}
                          name="direccion"
                          value={formData.direccion}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.streetAddressPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.neighborhood")}
                          name="direccion2"
                          value={formData.direccion2}
                          onChange={handleInputChange}
                          placeholder={t("form.neighborhoodPlaceholder")}
                          className="sm:col-span-2"
                        />
                        <Field
                          label={t("form.city")}
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          required
                        />
                        <Field
                          label={t("form.state")}
                          name="estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.statePlaceholder")}
                        />
                        <Field
                          label={t("form.postalCode")}
                          name="cp"
                          value={formData.cp}
                          onChange={handleInputChange}
                          required
                        />
                        <div>
                          <label className="text-[11px] font-bold text-slate-400 block mb-1.5">
                            {t("form.country")}
                          </label>
                          <select
                            name="pais"
                            value={formData.pais}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-800 bg-[#0b0f12]/60 px-4 py-3 text-xs text-white outline-none transition-all focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 appearance-none"
                          >
                            <option value="MX" className="bg-[#0b0f12] text-white">{t("form.mexico")}</option>
                          </select>
                        </div>
                      </div>
                    </CardShell>

                    {/* DATOS TARJETA (OCTANO PAYMENTS) */}
                    <CardShell className="p-6 sm:p-8 space-y-5 border-slate-800/80 bg-slate-900/20">
                      <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Field
                          label={t("form.cardNumber")}
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          maxLength={19}
                          placeholder={t("form.cardNumberPlaceholder")}
                          className="sm:col-span-3"
                          mono
                        />
                        <Field
                          label={t("form.cardHolderName")}
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder={t("form.cardHolderPlaceholder")}
                          className="sm:col-span-3"
                        />
                        <Field
                          label={t("form.expiryMonth")}
                          name="cardMonth"
                          value={formData.cardMonth}
                          onChange={handleInputChange}
                          required
                          maxLength={2}
                          placeholder={t("form.expiryMonthPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.expiryYear")}
                          name="cardYear"
                          value={formData.cardYear}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.expiryYearPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                        <Field
                          label={t("form.cvv")}
                          name="cardCvv"
                          type="password"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          required
                          maxLength={4}
                          placeholder={t("form.cvvPlaceholder")}
                          mono
                          inputClassName="text-center"
                        />
                      </div>
                    </CardShell>
                  </form>
                )}
              </div>

              {/* STICKY FINANCIAL SUMMARY SIDEBAR */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900/30 rounded-[2rem] border border-slate-800/80 p-6 sticky top-24 space-y-6 shadow-xl backdrop-blur-md">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
                    {t("financial.title")}
                  </h2>

                  <div className="flex flex-row justify-center items-center gap-4 pt-1">
                    <Image
                      src="/etomin.png"
                      alt={t("images.securePaymentAlt")}
                      width={150}
                      height={20}
                      className="object-contain brightness-200"
                    />
                  </div>

                  {step === 1 && (
                    <div className="border-b border-slate-800/60 pb-4 space-y-2">
                      {!appliedCoupon ? (
                        <form onSubmit={handleApplyCoupon} className="flex gap-2">
                          <input
                            type="text"
                            placeholder={t("financial.couponPlaceholder")}
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            className="flex-1 border border-slate-800 text-xs px-4 py-2.5 rounded-xl bg-[#0b0f12]/60 text-white outline-none focus:border-[#005e50] focus:ring-2 focus:ring-[#005e50]/20 placeholder:text-slate-600"
                          />
                          <button
                            type="submit"
                            className="bg-slate-800 text-white text-xs px-4 rounded-xl font-bold hover:bg-slate-700 transition"
                          >
                            {t("financial.applyCoupon")}
                          </button>
                        </form>
                      ) : (
                        <div className="bg-[#005e50]/10 border border-[#005e50]/30 rounded-xl p-3 flex items-center justify-between">
                          <div className="text-xs text-[#cdef24] font-medium font-body">
                            {t("financial.appliedCoupon", {
                              code: appliedCoupon.code,
                              discount: appliedCoupon.discount * 100,
                            })}
                          </div>
                          <button
                            type="button"
                            onClick={() => setAppliedCoupon(null)}
                            className="text-[10px] text-red-400 font-bold hover:underline"
                          >
                            {t("financial.remove")}
                          </button>
                        </div>
                      )}
                      {couponError && (
                        <p className="text-[10px] text-red-400 font-semibold pl-1">
                          ⚠️ {couponError}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="space-y-3.5 text-xs font-medium text-slate-400 border-b border-slate-800/60 pb-4">
                    <div className="flex justify-between">
                      <span>{t("financial.subtotal")}</span>
                      <span className="text-white font-bold font-mono">
                        {formatPrice(total, "MXN", true)}
                      </span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-[#cdef24]">
                        <span>{t("financial.discount")}</span>
                        <span className="font-bold font-mono">
                          -{formatPrice(discountAmount, "MXN", true)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-300">
                        {t("financial.netTotal")}
                      </span>
                      <span className="text-2xl font-black font-poppins text-white tracking-tight">
                        {formatPrice(grandTotal, "MXN", true)}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 text-right mt-1 font-body">
                      {t("financial.tax", {
                        tax: formatPrice(iva, "MXN", true),
                      })}
                    </p>
                  </div>

                  {step === 1 ? (
                    <Button
                      onClick={() => setStep(2)}
                      className="w-full bg-[#cdef24] hover:bg-[#b8d71f] text-[#0b0f12] py-6 rounded-xl text-xs font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(205,239,36,0.2)]"
                    >
                      {t("actions.proceedToPayment")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Button
                        type="submit"
                        form="etomin-payment-form"
                        disabled={isProcessing}
                        className={`w-full text-xs font-bold tracking-widest py-6 rounded-xl transition-all duration-300 ${isProcessing
                            ? "bg-slate-800 text-slate-500 cursor-wait"
                            : "bg-[#cdef24] text-[#0b0f12] hover:bg-[#b8d71f] shadow-md hover:shadow-[0_0_20px_rgba(205,239,36,0.2)]"
                          }`}
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{t("actions.processing")}</span>
                          </div>
                        ) : (
                          t("actions.payAmount", {
                            amount: formatPrice(grandTotal, "MXN", true),
                          })
                        )}
                      </Button>

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() => setStep(1)}
                        className="w-full text-center text-xs text-slate-400 font-bold hover:text-white py-1 flex items-center justify-center gap-1 transition"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        {t("actions.backToCart")}
                      </button>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-800/60 text-center space-y-3">
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed px-2">
                      {t("security.note")}
                    </p>
                    <div className="flex flex-row justify-center items-center gap-4 pt-1">
                      <Image
                        src="/secure-payment.png"
                        alt={t("images.securePaymentAlt")}
                        width={100}
                        height={20}
                        className="object-contain invert brightness-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}