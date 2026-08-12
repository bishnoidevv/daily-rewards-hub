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
    <div className="mt-3.5 text-center">
      <p className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
        30,000+ Participants This Week
      </p>
      <p className="mt-1 text-[13px] text-muted-foreground">
        <span className="text-step-2">•</span> Secured{" "}
        <span className="text-step-3">•</span> No payment required
      </p>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-[18px] w-[18px] shrink-0 text-muted-foreground transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background px-3.5 pt-3.5 pb-[max(1rem,env(safe-area-inset-bottom))] text-foreground">
      <div className="mx-auto flex w-full max-w-[430px] flex-col gap-3.5">
        {/* Hero */}
        <section
          id="start"
          className="rounded-[26px] bg-card px-5 pt-6 pb-5"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="text-center">
            <AppleLogo className="mx-auto h-[26px] w-auto text-foreground" />
            <h1 className="ios-tight mt-3 text-[34px] leading-[1.06] font-bold">Apple Cash Quiz</h1>
            <p className="mx-auto mt-2.5 max-w-[320px] text-[15px] leading-snug text-muted-foreground">
              Get Paid $750 in Apple Cash for Finishing 5+ Deals in the Quiz
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-[20px]">
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

          <div className="mt-5 rounded-[18px] border border-border bg-secondary/50 p-4">
            <div className="flex items-center justify-between text-[15px] font-semibold">
              <span>Quiz Progress</span>
              <span className="text-primary">0 of 5</span>
            </div>
            <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full w-[15%] rounded-full"
                style={{ background: "var(--gradient-progress)" }}
              />
            </div>
            <div className="mt-3.5 rounded-[14px] border border-border bg-card py-3 text-center text-[14px] font-semibold">
              Finish 5 Deals to finish the Quiz
            </div>
            <div className="mt-2 rounded-[14px] border border-primary/20 bg-primary/8 py-3 text-center text-[14px] font-semibold text-primary">
              Get $30 for each finished deal
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          className="rounded-[26px] bg-foreground px-4 py-5"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h2 className="ios-tight text-center text-[26px] font-bold text-background">
            How it works
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[22px] px-3 py-3"
                style={{ background: s.bg }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-[13px] font-bold text-foreground">
                  {s.n}
                </span>
                <span className="text-[15px] leading-snug font-semibold tracking-[-0.01em] text-card">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Deals */}
        <section>
          <p className="px-4 pb-2 text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            Deals You&apos;ll See
          </p>
          <div
            className="rounded-[26px] bg-card px-5 py-4"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="ios-tight text-[22px] leading-tight font-bold">
              Choose offers that fit you.
            </h2>
            <p className="mt-1 text-[15px] leading-snug text-muted-foreground">
              Pick a category. Finish deals. Earn $30 each.
            </p>
            <ul className="mt-2 divide-y divide-border">
              {categories.map((c) => (
                <li
                  key={c}
                  className="flex items-center justify-between gap-3 py-3.5 text-[17px] leading-snug font-normal tracking-[-0.01em]"
                >
                  <span className="min-w-0">{c}</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[17px] w-[17px] shrink-0 text-muted-foreground/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Payout tiers */}
        <section>
          <p className="px-4 pb-2 text-[13px] font-medium tracking-[0.04em] text-muted-foreground uppercase">
            Payout Tiers
          </p>
          <ul
            className="divide-y divide-border overflow-hidden rounded-[26px] bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {tiers.map((t) => (
              <li
                key={t.deals}
                className="flex items-center justify-between px-5 py-3.5 text-[17px] tracking-[-0.01em]"
              >
                <span className="min-w-0 truncate">{t.deals}</span>
                <span className="shrink-0 pl-3 font-semibold text-primary">{t.payout}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <div className="px-4 pb-2">
            <h2 className="ios-tight text-[22px] font-bold">Quick answers</h2>
            <p className="mt-0.5 text-[13px] text-muted-foreground">
              Read this before you continue.
            </p>
          </div>
          <ul
            className="divide-y divide-border overflow-hidden rounded-[26px] bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {faqs.map((f, i) => (
              <li key={f.q} className="px-5">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-3 py-3.5 text-left text-[17px] tracking-[-0.01em] active:opacity-60"
                  aria-expanded={open === i}
                >
                  <span className="min-w-0">{f.q}</span>
                  <Chevron open={open === i} />
                </button>
                {open === i && (
                  <p className="pb-3.5 text-[15px] leading-snug text-muted-foreground">{f.a}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Cta />
            <Trust />
          </div>
        </section>

        <footer className="pb-2 text-center">
          <nav className="flex items-center justify-center gap-3 text-[14px] font-medium text-primary">
            <a href="#start">Privacy Policy</a>
            <span className="text-muted-foreground">•</span>
            <a href="#start">Terms</a>
            <span className="text-muted-foreground">•</span>
            <a href="#start">Support</a>
          </nav>
          <p className="mt-2 text-[12px] text-muted-foreground">
            © 2026 Apple Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
