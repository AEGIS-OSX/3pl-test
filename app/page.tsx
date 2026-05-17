"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Home() {
  return (
    <main id="top">
      {/* Hero */}
      <motion.section
        className="section-y-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-bg)" }}
     >
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <h1>3PL Command: Operational visibility for 3PL owners and ops teams</h1>
            <p style={{ color: "var(--color-text-muted)" }}>
              See every new order, shipment update, and exception in one live feed. Connect Shopify, ShipBob, and Amazon with guided steps, surface only the issues that need attention, and keep your team focused on fulfillment.
            </p>
            <div className="flex flex-col gap-3 max-w-sm">
              <Link href="/signup" className="btn-primary w-full text-center" style={{ color: "var(--color-surface)" }}>
                Start a free trial
              </Link>
              <Link href="/demo" className="btn-secondary-link w-fit" style={{ color: "var(--color-primary)" }}>
                Request a demo
              </Link>
            </div>
          </div>
          <div className="md:justify-self-end">
            <ProjectImage id="hero" className="w-full h-auto" />
          </div>
        </div>
      </motion.section>

      {/* Why 3PL Command */}
      <motion.section
        className="section-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-surface)" }}
     >
        <div className="container grid grid-cols-1 gap-8">
          <h2>Why 3PL Command</h2>
          <ul className="grid gap-6">
            <li>
              <h3>One live feed, no tab switching.</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                New orders, carrier updates, and warehouse events appear in a single timeline so you can triage work without hunting for status.
              </p>
            </li>
            <li>
              <h3>Guided integrations.</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Marketplace apps and step-by-step connectors for Shopify, ShipBob, and Amazon reduce setup friction for non-technical teams.
              </p>
            </li>
            <li>
              <h3>Alert center built for ops.</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Grouped alerts, snooze, and scheduled digests cut noise and let you act on true exceptions first.
              </p>
            </li>
            <li>
              <h3>Client portal, billing-ready exports.</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Give merchants view-only access to shipment status, let them download proofs, and generate invoice-ready exports for fast billing.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        className="section-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container">
          <h2 className="mb-8">How it works</h2>
          <ol className="grid gap-8 border-l pl-6" style={{ borderColor: "var(--color-border)" }}>
            <li>
              <h3>Connect</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Follow our guided flow to link a store or carrier. The UI shows required permissions and live health checks.
              </p>
            </li>
            <li>
              <h3>Sync</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Orders and tracking events flow into a single timeline. We show progress, partial syncs, and clear next steps if something fails.
              </p>
            </li>
            <li>
              <h3>Act</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Use quick actions from the timeline to reprint labels, create tickets, or reroute shipments. Snooze similar alerts or convert them to an hourly digest.
              </p>
            </li>
          </ol>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="section-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container grid gap-12">
          <h2>Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3>Live Operational Dashboard</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                A dense, mobile-first list and timeline that surfaces high-priority items first. Filters, pinned columns, and a compact data view let operators scan a large queue fast.
              </p>
            </div>
            <ProjectImage id="feature_1" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h3>Guided Integrations</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Marketplace apps where supported, plus step-by-step manual flows. Inline troubleshooting, retry helpers, and an option to request white-glove onboarding if you need it.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ProjectImage id="feature_2" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3>Alert Center with Anti-Fatigue Controls</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Default conservative rules, deduplication, and scheduled digests reduce alert overload. Snooze or escalate from the alert detail without losing context.
              </p>
            </div>
            <ProjectImage id="feature_3" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h3>Client Portal</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Invite merchants to a secure, view-only portal. They can see order timelines, download proof-of-delivery, and open a support ticket with order context attached.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ProjectImage id="social_proof" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3>Billing-Ready Exports</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Generate CSV or JSON exports that map shipments, storage days, returns, and surcharges for accountant-friendly invoicing.
              </p>
            </div>
            <div>
              <h3>Security & Audit</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Tenant separation, role-based access, and immutable audit logs. Sensitive credentials are encrypted at rest and in transit.
              </p>
            </div>
            <div>
              <h3>Pilot-ready Support</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Clear support tiers and SLAs are listed on our Pricing page. For teams without technical staff, white-glove setup is available as an add-on.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        className="section-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container grid gap-6 max-w-3xl">
          <blockquote className="grid gap-4">
            <p style={{ color: "var(--color-text-primary)" }}>
              “Setup was guided and painless. Our ops team stopped hunting across tabs and started resolving exceptions the same day.”
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>— Pilot participant, 3PL Owner (pilot program)</p>
          </blockquote>
        </div>
      </motion.section>

      {/* Pricing & Trial */}
      <motion.section
        className="section-y"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container grid gap-6">
          <h2>Pricing & Trial</h2>
          <p style={{ color: "var(--color-text-muted)" }}>
            Transparent pricing and a free trial are available on our Pricing page. Request a demo for enterprise needs and custom onboarding.
          </p>
          <div className="flex gap-4">
            <Link href="/pricing" className="btn-secondary-link" style={{ color: "var(--color-primary)" }}>
              View pricing
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        className="section-y-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container grid gap-6 max-w-2xl text-center">
          <div className="flex flex-col gap-3 items-center">
            <Link href="/signup" className="btn-primary w-full sm:w-auto" style={{ color: "var(--color-surface)" }}>
              Start a free trial
            </Link>
            <Link href="/demo" className="btn-secondary-link" style={{ color: "var(--color-primary)" }}>
              Request a demo
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}