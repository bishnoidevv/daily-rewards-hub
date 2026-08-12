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
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.417 2.09-1.25 2.85-.834.76-1.83 1.2-2.99 1.13-.03-1.06.41-2.03 1.24-2.84.83-.81 1.87-1.24 3-1.14zM20.6 17.02c-.35.81-.77 1.56-1.26 2.26-.67.95-1.22 1.61-1.65 1.98-.5.45-1.04.69-1.62.7-.42 0-.92-.12-1.51-.36-.6-.24-1.14-.36-1.65-.36-.53 0-1.09.12-1.68.36-.6.25-1.08.37-1.45.38-.56.02-1.11-.22-1.65-.72-.46-.4-1.04-1.09-1.73-2.06-.74-1.04-1.35-2.25-1.83-3.62C4.5 14.1 4.24 12.66 4.24 11.3c0-1.56.34-2.9 1.01-4.02.53-.9 1.24-1.62 2.12-2.14.88-.53 1.83-.8 2.86-.82.45 0 1.04.14 1.77.41.73.28 1.2.42 1.4.42.15 0 .67-.16 1.55-.49.83-.3 1.53-.43 2.11-.38 1.56.13 2.73.75 3.51 1.86-1.4.85-2.09 2.04-2.07 3.56.01 1.19.44 2.18 1.28 2.96.38.36.81.64 1.28.84-.1.3-.21.58-.33.86z" />
    </svg>
  );
}

function Cta({ label = "Start Now" }: { label?: string }) {
  return (
    <a
      href="#start"
      className="block w-full rounded-full bg-primary py-4 text-center text-lg font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
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
              src={cashCard}
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
