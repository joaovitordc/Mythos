import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Information Security and Privacy Policy | Kairos",
  description:
    "Kairos information security and privacy policy — data protection, encryption, access control, incident response, and LGPD compliance.",
};

export default function SecurityPageEN() {
  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-32 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <LanguageSwitch current="en" />

        <header className="mb-16 border-b border-white/10 pb-10">
          <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase font-medium mb-4">
            Kairos · Information Security
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Information Security and Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-white/55">
            Last updated: April 17, 2026 · Version 1.0
          </p>
        </header>

        <section className="space-y-5 text-white/75 leading-relaxed text-[15px]">
          <p>
            <strong>Kairos</strong> is a Brazilian software engineering and
            artificial intelligence company, and the developer of the
            <strong> EllO ERP</strong> platform. This policy describes the
            technical, administrative, and organizational controls Kairos
            applies to protect the information handled by its systems and
            integrations, in compliance with the Brazilian General Data
            Protection Law (LGPD &ndash; Law 13.709/2018) and international
            information security best practices.
          </p>
        </section>

        <Section number="1" title="Scope">
          <p>
            This policy applies to all products, services, integrations, and
            infrastructure operated by Kairos, including the EllO ERP platform
            and its integrations with marketplaces and external partners such
            as Shopee, TikTok Shop, and other sales and customer service
            channels.
          </p>
        </Section>

        <Section number="2" title="Data handled">
          <p>
            Kairos collects and processes only the data required to operate
            the integrations explicitly enabled by its customers, including:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Order, product, and inventory data made available by the APIs of
              marketplaces authorized by the customer;
            </li>
            <li>
              Chat messages exchanged between seller and buyer, when the
              centralized customer service feature is enabled;
            </li>
            <li>
              Authentication tokens (access tokens and refresh tokens) issued
              by marketplaces;
            </li>
            <li>
              Minimum registration data of internal ERP users (name, corporate
              email, access profile).
            </li>
          </ul>
          <p className="mt-4">
            No data is sold, shared, or used for any purpose other than those
            explicitly authorized by the customer and by the policies of the
            integrated marketplaces.
          </p>
        </Section>

        <Section number="3" title="Encryption">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In transit:</strong> all traffic between EllO ERP, its
              users, and external APIs is protected by TLS 1.2 or higher
              (HTTPS enforced);
            </li>
            <li>
              <strong>At rest:</strong> access tokens, API keys, and sensitive
              data are stored using AES-256-GCM through Rails Active Record
              Encryption;
            </li>
            <li>
              <strong>Secrets and credentials:</strong> managed through an
              encrypted vault (Rails encrypted credentials) with a master key
              stored outside the repository and rotated periodically.
            </li>
          </ul>
        </Section>

        <Section number="4" title="Access control">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Password-based authentication with minimum complexity
              requirements and bcrypt hashing (Devise);
            </li>
            <li>
              Role-based access control (RBAC) per user, limiting each
              operator to the operations strictly required by their role;
            </li>
            <li>
              IP whitelisting for outbound calls to production partner APIs,
              as required by partners (e.g., Shopee Open Platform);
            </li>
            <li>
              Audit logs for sensitive actions (shop authorization, order data
              changes, message sending).
            </li>
          </ul>
        </Section>

        <Section number="5" title="Third-party integrations">
          <p>
            Kairos integrates exclusively with official marketplace APIs,
            fully honoring their terms of use, rate limits, and privacy
            policies.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Access is granted through official OAuth 2.0 flows — the
              customer explicitly authorizes each shop;
            </li>
            <li>
              No marketplace user credentials (username/password) are ever
              stored on our systems;
            </li>
            <li>
              Access tokens can be revoked by the customer at any time, with
              immediate deletion of associated data;
            </li>
            <li>
              Webhooks received from partners are validated with cryptographic
              signatures (HMAC-SHA256) before any processing.
            </li>
          </ul>
        </Section>

        <Section number="6" title="Data retention and deletion">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Operational data (orders, messages, history) is stored as long
              as the customer contract remains active;
            </li>
            <li>
              Upon contract termination or revocation of authorization, all
              data associated with the shop is deleted within 30 calendar
              days, unless legal retention obligations apply;
            </li>
            <li>
              Backups are encrypted, stored in segregated environments, and
              follow the same deletion cycle.
            </li>
          </ul>
        </Section>

        <Section number="7" title="Incident response">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Continuous monitoring of logs and automated alerts for anomalous
              behavior (authentication failures, request spikes, HTTP 5xx
              errors);
            </li>
            <li>
              In case of a security incident involving personal data, affected
              customers and the Brazilian Data Protection Authority (ANPD)
              are notified within 72 hours, as required by the LGPD;
            </li>
            <li>
              Affected partners (e.g., Shopee, TikTok Shop) are notified
              according to each API&apos;s contractual requirements.
            </li>
          </ul>
        </Section>

        <Section number="8" title="Secure development">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Mandatory code review before any merge to production;
            </li>
            <li>
              Automated static security analysis on every commit (Brakeman
              for Ruby on Rails);
            </li>
            <li>
              Linters and automated tests (minimum coverage: 1.5x test lines
              per production code line);
            </li>
            <li>
              Periodic dependency updates and monitoring of known
              vulnerabilities (CVEs).
            </li>
          </ul>
        </Section>

        <Section
          number="9"
          title="Privacy and data subject rights"
          anchor="privacy"
        >
          <p>
            In accordance with the LGPD, data subjects may at any time
            request: confirmation of processing, access to their data,
            correction of incomplete or inaccurate data, anonymization,
            blocking or deletion of unnecessary data, portability to another
            provider, information about data sharing, and revocation of
            consent.
          </p>
          <p className="mt-3">
            Requests must be sent to the Data Protection Officer (DPO) at{" "}
            <a
              href="mailto:privacidade@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              privacidade@kairos.com.br
            </a>{" "}
            and will be answered within 15 business days.
          </p>
        </Section>

        <Section number="10" title="Contact">
          <p>
            Questions, vulnerability reports, or security incidents can be
            sent to{" "}
            <a
              href="mailto:seguranca@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80"
            >
              seguranca@kairos.com.br
            </a>
            . We respond within 2 business days.
          </p>
        </Section>

        <footer className="mt-16 pt-10 border-t border-white/10 text-xs text-white/40">
          <p>
            This document is reviewed periodically. The current version is
            always the one published at this URL.
          </p>
        </footer>
      </div>
    </main>
  );
}

function LanguageSwitch({ current }: { current: "pt" | "en" }) {
  return (
    <div className="mb-10 flex gap-2 text-xs uppercase tracking-[0.18em]">
      <Link
        href="/security"
        className={
          current === "pt"
            ? "text-white"
            : "text-white/40 hover:text-white/70 transition-colors"
        }
      >
        PT
      </Link>
      <span className="text-white/20">·</span>
      <Link
        href="/security/en"
        className={
          current === "en"
            ? "text-white"
            : "text-white/40 hover:text-white/70 transition-colors"
        }
      >
        EN
      </Link>
    </div>
  );
}

function Section({
  number,
  title,
  anchor,
  children,
}: {
  number: string;
  title: string;
  anchor?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={anchor} className="mt-14 scroll-mt-32">
      <h2 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
        {number}. {title}
      </h2>
      <div className="text-[15px] text-white/75 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
