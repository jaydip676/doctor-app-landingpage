import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    for: "For solo clinics",
    price: "₹999",
    period: "/month",
    features: [
      "One doctor, one location",
      "Appointments & records",
      "Digital prescriptions",
      "UPI payments",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    for: "For growing practices",
    price: "₹1,999",
    period: "/month",
    features: [
      "Everything in Starter",
      "Reception, lab & pharmacy",
      "Payment gateways & analytics",
      "WhatsApp & AI summary",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    for: "Multi-location hospitals",
    price: "Custom",
    period: "",
    features: [
      "Everything in Professional",
      "Multiple locations",
      "Priority support & onboarding",
      "Custom integrations",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <WideSection id="pricing">
      <WideHeader
        title="Simple, honest pricing."
        description="Start free. Upgrade when your clinic is ready."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] max-w-[clamp(1000px,66vw,1600px)] mx-auto motion-reveal">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative border rounded-[18px] bg-surface p-[clamp(30px,1.98vw,42px)] ${
              plan.popular
                ? "border-teal shadow-[var(--shadow-popular)]"
                : "border-line"
            }`}
          >
            {plan.popular ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[clamp(11px,0.73vw,14.5px)] font-bold tracking-widest px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            ) : null}
            <h3 className="font-display text-[clamp(19px,1.26vw,25px)] font-semibold">{plan.name}</h3>
            <div className="text-[clamp(13px,0.86vw,17px)] text-ink-soft mt-1 mb-4">{plan.for}</div>
            <div className="font-display text-[clamp(40px,2.65vw,58px)] font-semibold tracking-tight">
              {plan.price}
              {plan.period ? (
                <small className="text-[clamp(14px,0.93vw,18px)] text-ink-soft font-medium">
                  {plan.period}
                </small>
              ) : null}
            </div>
            <ul className="mt-[18px] mb-[22px] flex flex-col gap-[9px] list-none">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="text-[clamp(13.5px,0.89vw,17.5px)] text-ink-soft pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-teal before:font-bold"
                >
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="mailto:hello@lampros.tech"
              className={`block text-center font-semibold text-[clamp(14px,0.93vw,18px)] py-[13px] rounded-full border ${
                plan.popular
                  ? "bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] border-[var(--btn-primary-bg)]"
                  : "border-line"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-[34px] text-[clamp(13px,0.86vw,17px)] text-ink-soft motion-reveal">
        <span>
          <b className="text-ink">14-day</b> free trial
        </span>
        <span>
          <b className="text-ink">No</b> credit card
        </span>
        <span>
          <b className="text-ink">Cancel</b> anytime
        </span>
      </div>
    </WideSection>
  );
}
