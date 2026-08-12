import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cashCard from "@/assets/apple-cash-card.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apple Cash Quiz — Earn Up To $750 in Apple Cash" },
      {
        name: "description",
        content:
          "Finish 5+ partner deals in the Apple Cash Quiz and get $30 for each completed deal, up to $750 in Apple Cash.",
      },
      { property: "og:title", content: "Apple Cash Quiz — Earn Up To $750" },
      {
        property: "og:description",
        content: "Get $30 per finished deal. Complete 5+ deals to claim your Apple Cash reward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { n: 1, label: 'Click "Start Now"', bg: "var(--gradient-step-1)" },
  { n: 2, label: "Enter Email & Basic information", bg: "var(--gradient-step-2)" },
  { n: 3, label: "Complete 5+ Apple Partnered Deals", bg: "var(--gradient-step-3)" },
  { n: 4, label: "Finish the Full quiz to Get The Full Reward", bg: "var(--gradient-step-4)" },
];

const categories = [
  "Mobile Gaming Apps",
  "Subscriptions",
  "Free Trials",
  "Shopping Deals",
  "Financial Services",
];

const tiers = [
  { deals: "5 Finished Deals", payout: "$150" },
  { deals: "10 Finished Deals", payout: "$300" },
  { deals: "25 Finished Deals", payout: "$750" },
];

const faqs = [
  {
    q: "What is this Apple Quiz?",
    a: "Complete partner deals in the quiz and earn $30 for each finished deal.",
  },
  {
    q: "How do I qualify?",
    a: "Start the quiz and complete the partner deals shown on your screen.",
  },
  {
    q: "How much can I earn?",
    a: "Each finished deal pays $30. Complete more deals to reach up to $750.",
  },
  { q: "Who can participate?", a: "Anyone with an eligible mobile device can start." },
];

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 170 210"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      shapeRendering="geometricPrecision"
    >
      <path d="M139.7 111.4c.2 23.6 20.7 31.5 21 31.6-.2.6-3.3 11.4-11 22.5-6.6 9.7-13.5 19.3-24.4 19.5-10.7.2-14.2-6.3-26.4-6.3-12.3 0-16 6.1-26.1 6.5-10.5.4-18.5-10.4-25.2-20-14.6-21-25.8-59.4-10.8-85.3 7.5-12.9 20.8-21 35.3-21.2 10.4-.2 20.1 7 26.4 7 6.3 0 18.2-8.6 30.6-7.4 5.2.2 19.9 2.1 29.3 15.9-.8.5-17.5 10.2-17.7 30.2M114.6 31.7C120.2 24.9 124 15.5 123 6c-8.3.3-18.4 5.5-24.2 12.3-5.2 6-9.5 15.6-8.3 24.8 9.3.7 18.5-4.7 24.1-11.4" />
    </svg>
  );
}

function Cta({ label = "Start Now" }: { label?: string }) {
  return (
    <a
      href="#start"
      className="flex h-[54px] w-full items-center justify-center rounded-[14px] bg-primary text-[17px] font-semibold tracking-[-0.01em] text-primary-foreground transition-all duration-150 active:scale-[0.97] active:brightness-95"
      style={{ boxShadow: "var(--shadow-cta)" }}
    >
      {label}
    </a>
  );
}

function Trust() {
  return (
    <div className="mt-4 text-center">
      <p className="text-sm font-bold text-foreground">30,000+ Participants This Week</p>
      <p className="mt-1 text-xs text-muted-foreground">• Secured • No payment required</p>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background px-4 py-4 text-foreground">
      <div className="mx-auto flex w-full max-w-[420px] flex-col gap-5">
        {/* Hero */}
        <section
          id="start"
          className="rounded-3xl bg-card p-5"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="text-center">
            <AppleLogo className="mx-auto h-6 w-6 text-foreground" />
            <h1 className="mt-2 text-4xl font-bold tracking-tight">Apple Cash Quiz</h1>
            <p className="mx-auto mt-2 max-w-[320px] text-sm text-muted-foreground">
              Get Paid $750 in Apple Cash for Finishing 5+ Deals in the Quiz
            </p>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl">
            <img
              src={cashCard.url}
              alt="Apple Cash card worth $750"
              width={1024}
              height={640}
              className="h-auto w-full"
            />
          </div>

          <div className="mt-5">
            <Cta />
            <Trust />
          </div>

          <div
            className="mt-5 rounded-2xl border border-border bg-card p-4"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center justify-between text-sm font-bold">
              <span>Quiz Progress</span>
              <span className="text-primary">0 of 5</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[15%] rounded-full" style={{ background: "var(--gradient-progress)" }} />
            </div>
            <div className="mt-4 rounded-xl border border-border py-3 text-center text-sm font-bold">
              Finish 5 Deals to finish the Quiz
            </div>
            <div className="mt-2 rounded-xl border border-primary/20 bg-primary/8 py-3 text-center text-sm font-bold text-primary">
              Get $30 for each finished deal
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="rounded-3xl bg-foreground p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h2 className="text-center text-2xl font-bold text-background">How it works</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex items-center gap-3 rounded-full px-3 py-3"
                style={{ background: s.bg }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-sm font-bold text-foreground">
                  {s.n}
                </span>
                <span className="text-sm font-medium text-card">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Deals */}
        <section className="rounded-3xl bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <p className="text-sm font-bold text-muted-foreground">Deals You&apos;ll See</p>
          <h2 className="mt-1 text-2xl font-bold">Choose offers that fit you.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick a category. Finish deals. Earn $30 each.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {categories.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-primary/15 bg-primary/8 py-3 text-center text-sm font-bold text-primary"
              >
                {c}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-bold">Payout Tiers</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {tiers.map((t) => (
              <li
                key={t.deals}
                className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold"
              >
                <span>{t.deals}</span>
                <span className="text-primary">{t.payout}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h2 className="text-2xl font-bold">Quick answers</h2>
          <p className="mt-1 text-sm text-muted-foreground">Read this before you continue.</p>
          <ul className="mt-4 divide-y divide-border">
            {faqs.map((f, i) => (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-semibold"
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span className="text-muted-foreground">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="pb-4 text-sm text-muted-foreground">{f.a}</p>}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="rounded-3xl bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <Cta />
          <Trust />
        </section>
      </div>
    </main>
  );
}
