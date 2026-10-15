import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  FlaskConical,
  Globe,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { CONTACT, PRODUCTS } from "@/lib/content";

/** Submission adapter: set to a form endpoint (POST JSON) to deliver enquiries directly. Empty = opens the visitor's email app. */
export const ENQUIRY_ENDPOINT = "";

type F = {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  product: string;
  application: string;
  message: string;
};

const EMPTY: F = {
  name: "",
  company: "",
  email: "",
  country: "",
  phone: "",
  product: "",
  application: "",
  message: "",
};

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "Brazil",
  "Canada",
  "Switzerland",
  "Italy",
  "Spain",
  "Netherlands",
  "South Korea",
  "Indonesia",
  "Mexico",
  "South Africa",
  "Other Country",
];

function validate(v: F) {
  const e: Partial<Record<keyof F, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (v.company.trim().length < 2) e.company = "Please enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid business email.";
  if (!v.country.trim()) e.country = "Please select your country.";
  if (!/^[+()\d\s-]{7,20}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid contact number.";
  if (!v.product.trim()) e.product = "Please choose a product or product family.";
  if (v.message.trim().length < 10)
    e.message = "Please tell us a little more (10+ characters).";
  return e;
}

export function EnquiryForm({
  product,
  intent,
}: {
  product?: string;
  intent?: "sample" | "documents" | "enquiry";
}) {
  const [v, setV] = useState<F>(EMPTY);
  const [err, setErr] = useState<Partial<Record<keyof F, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "mail" | "error">("idle");
  const busy = useRef(false);

  useEffect(() => {
    const p = product ?? new URLSearchParams(window.location.search).get("product") ?? "";
    if (!p) return;
    const msg =
      intent === "sample"
        ? `I would like to request a sample of ${p}.`
        : intent === "documents"
        ? `Please share the TDS / MSDS for ${p}.`
        : "";
    setV((s) => ({ ...s, product: p, message: msg || s.message }));
    setState("idle");
  }, [product, intent]);

  const set = (k: keyof F) => (e: { target: { value: string } }) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (err[k]) {
      setErr((prev) => ({ ...prev, [k]: undefined }));
    }
  };

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy.current) return;
    const er = validate(v);
    setErr(er);
    if (Object.keys(er).length) {
      document.getElementById(`f-${Object.keys(er)[0]}`)?.focus();
      return;
    }
    busy.current = true;
    setState("sending");
    if (ENQUIRY_ENDPOINT) {
      try {
        const r = await fetch(ENQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(v),
        });
        if (!r.ok) throw new Error();
        setState("sent");
      } catch {
        setState("error");
      }
      busy.current = false;
      return;
    }
    const body = `Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nCountry: ${v.country}\nPhone: ${v.phone}\nProduct: ${v.product}\nApplication: ${v.application}\n\n${v.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Enquiry: ${v.product} — ${v.company}`,
    )}&body=${encodeURIComponent(body)}`;
    setState("mail");
    busy.current = false;
  }

  if (state === "sent" || state === "mail") {
    return (
      <div
        role="status"
        className="rounded-[28px] bg-white p-8 sm:p-12 shadow-2xl border border-slate-100 flex flex-col items-start gap-4"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
          {state === "sent"
            ? "Thank you — your enquiry has been received."
            : "Your email app should now be open with your enquiry ready."}
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed">
          {state === "mail" ? (
            <>
              Your enquiry is delivered once you press send in your email app. If it didn't open, write to{" "}
              <a className="font-medium text-[#EA580C] underline" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>{" "}
              or call{" "}
              <a className="font-medium text-[#EA580C] underline" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
              .
            </>
          ) : (
            "Our team will be in touch with you shortly to discuss your application and requirements."
          )}
        </p>
        <button
          onClick={() => {
            setV(EMPTY);
            setState("idle");
          }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#1E293B]"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] bg-[#FAF8F5] p-7 sm:p-9 lg:p-10 shadow-2xl border border-white/80">
      {/* Header Eyebrow & Title */}
      <div>
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#EA580C] uppercase">
          Send Us An Enquiry
        </p>
        <h3 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-bold text-[#0F172A] mt-1.5 tracking-tight">
          Discuss Your Requirements
        </h3>
        <p className="mt-2 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
          Share a few details and our team will get in touch with you shortly to understand your
          needs and suggest the right colour solutions.
        </p>
      </div>

      <form noValidate onSubmit={submit} className="mt-6 sm:mt-7 space-y-4">
        {/* Row 1: Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="f-name" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.name
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <User className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                id="f-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={v.name}
                onChange={set("name")}
                aria-invalid={!!err.name}
                className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {err.name && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.name}</p>}
          </div>

          <div>
            <label htmlFor="f-company" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Company Name <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.company
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <Building2 className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                id="f-company"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                value={v.company}
                onChange={set("company")}
                aria-invalid={!!err.company}
                className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {err.company && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.company}</p>}
          </div>
        </div>

        {/* Row 2: Business Email & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="f-email" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Business Email <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.email
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <Mail className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                id="f-email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={v.email}
                onChange={set("email")}
                aria-invalid={!!err.email}
                className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {err.email && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.email}</p>}
          </div>

          <div>
            <label htmlFor="f-country" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Country <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.country
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <Globe className="h-4 w-4 text-slate-400 shrink-0" />
              <select
                id="f-country"
                value={v.country}
                onChange={set("country")}
                aria-invalid={!!err.country}
                className={`w-full bg-transparent text-xs sm:text-[13px] focus:outline-none appearance-none cursor-pointer pr-6 ${
                  v.country ? "text-[#0F172A]" : "text-slate-400"
                }`}
              >
                <option value="" disabled>
                  Select country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c} className="text-[#0F172A]">
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 pointer-events-none absolute right-3" />
            </div>
            {err.country && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.country}</p>}
          </div>
        </div>

        {/* Row 3: Contact Number & Product / Family */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="f-phone" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.phone
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <Phone className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                id="f-phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                value={v.phone}
                onChange={set("phone")}
                aria-invalid={!!err.phone}
                className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            {err.phone && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.phone}</p>}
          </div>

          <div>
            <label htmlFor="f-product" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
              Product or Product Family <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative flex items-center gap-2.5 rounded-xl border bg-[#F7F4EE] px-3.5 h-11 transition-all ${
                err.product
                  ? "border-red-400 bg-red-50/30"
                  : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
              }`}
            >
              <FlaskConical className="h-4 w-4 text-slate-400 shrink-0" />
              <select
                id="f-product"
                value={v.product}
                onChange={set("product")}
                aria-invalid={!!err.product}
                className={`w-full bg-transparent text-xs sm:text-[13px] focus:outline-none appearance-none cursor-pointer pr-6 ${
                  v.product ? "text-[#0F172A]" : "text-slate-400"
                }`}
              >
                <option value="" disabled>
                  Select product
                </option>
                {PRODUCTS.map((p) => (
                  <option key={p.slug} value={p.name} className="text-[#0F172A]">
                    {p.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 pointer-events-none absolute right-3" />
            </div>
            {err.product && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.product}</p>}
          </div>
        </div>

        {/* Row 4: Application or End Use (Optional) */}
        <div>
          <label htmlFor="f-application" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
            Application or End Use (Optional)
          </label>
          <div className="flex items-center gap-2.5 rounded-xl border border-[#E5E0D8] bg-[#F7F4EE] px-3.5 h-11 transition-all focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs">
            <FileText className="h-4 w-4 text-slate-400 shrink-0" />
            <input
              id="f-application"
              type="text"
              placeholder="e.g. Food, Pharma, Cosmetics, Coatings, etc."
              value={v.application}
              onChange={set("application")}
              className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 5: Message */}
        <div>
          <label htmlFor="f-message" className="block text-[12px] font-semibold text-[#1E293B] mb-1.5">
            Message
          </label>
          <div
            className={`flex items-start gap-2.5 rounded-xl border bg-[#F7F4EE] p-3 transition-all ${
              err.message
                ? "border-red-400 bg-red-50/30"
                : "border-[#E5E0D8] focus-within:border-[#EA580C] focus-within:bg-white focus-within:shadow-xs"
            }`}
          >
            <MessageSquare className="h-4 w-4 text-slate-400 shrink-0 mt-1" />
            <textarea
              id="f-message"
              rows={3}
              placeholder="Tell us about your requirements..."
              value={v.message}
              onChange={set("message")}
              aria-invalid={!!err.message}
              className="w-full bg-transparent text-xs sm:text-[13px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none resize-none leading-relaxed"
            />
          </div>
          {err.message && <p className="mt-1 text-[11px] text-red-500 font-medium">{err.message}</p>}
        </div>

        {state === "error" && (
          <p role="alert" className="text-xs font-semibold text-red-500">
            We couldn't send your enquiry. Please try again or email {CONTACT.email}.
          </p>
        )}

        {/* Bottom Actions Row */}
        <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5 justify-between">
          <button
            type="submit"
            disabled={state === "sending"}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F95721] to-[#FF6B35] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:scale-95 disabled:opacity-60"
          >
            <span>{state === "sending" ? "Preparing…" : "Send Enquiry"}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {!ENQUIRY_ENDPOINT && (
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <Lock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              <span>Opens your email app with the enquiry filled in.</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
