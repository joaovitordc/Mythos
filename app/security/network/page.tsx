import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Security Architecture | Kairos",
  description:
    "Technical brief describing Kairos' network architecture, segregation controls, firewall rules, monitoring, and threat response practices.",
};

export default function NetworkSecurityPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 lg:px-32 pt-32 pb-24 print:pt-12 print:bg-white print:text-black">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14 border-b border-white/10 pb-10 print:border-black/20">
          <p className="text-[11px] text-white/60 tracking-[0.18em] uppercase font-medium mb-4 print:text-black/60">
            Kairos · Network Security Brief
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Network Segregation and Threat Protection Architecture
          </h1>
          <p className="mt-5 text-sm text-white/55 print:text-black/60">
            Technical document · Version 1.0 · April 17, 2026
          </p>
        </header>

        <Section number="1" title="Executive summary">
          <p>
            Kairos operates the EllO ERP platform and related services in
            network-isolated environments, with strict firewall rules, mandatory
            encryption in transit and at rest, IP whitelisting for partner
            integrations, a non-publicly-exposed database, and continuous log
            monitoring with automated alerts. This document describes the
            primary technical controls in place.
          </p>
        </Section>

        <Section number="2" title="Network topology">
          <p>The architecture consists of three independent logical tiers:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Edge tier:</strong> CDN with WAF and DDoS protection,
              handling all public HTTP/HTTPS traffic. Forwards requests only
              to validated endpoints.
            </li>
            <li>
              <strong>Application tier:</strong> Rails servers deployed via
              Kamal on a dedicated VPS, reachable exclusively from the edge
              tier. Exposed ports are restricted (HTTPS/443 and SSH limited to
              an allowlist).
            </li>
            <li>
              <strong>Data tier:</strong> managed PostgreSQL (Supabase),
              isolated in a private network, with no public IP. Accessible
              only from the application tier through a TLS-encrypted
              connection.
            </li>
          </ul>
          <pre className="mt-5 p-5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[12px] leading-6 overflow-x-auto text-white/75 print:bg-black/5 print:border-black/20 print:text-black/80">
{`Users / Partners (HTTPS)
         │
         ▼
┌─────────────────────────┐
│  Edge (CDN + WAF)       │  TLS 1.2+, DDoS, rate limit
└─────────────────────────┘
         │ HTTPS
         ▼
┌─────────────────────────┐
│  App Servers (Rails)    │  Strict firewall, SSH allowlist
└─────────────────────────┘
         │ internal TLS
         ▼
┌─────────────────────────┐
│  Database (PostgreSQL)  │  Private network, no public IP
└─────────────────────────┘`}
          </pre>
        </Section>

        <Section number="3" title="Environment segregation">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Production:</strong> dedicated network, isolated
              credentials, access limited to authorized operators.
            </li>
            <li>
              <strong>Staging:</strong> separate network, synthetic data only,
              never contains real customer data.
            </li>
            <li>
              <strong>Development:</strong> local developer environments, with
              no connectivity to production.
            </li>
          </ul>
          <p className="mt-3">
            No network traffic or automatic data migration occurs between
            environments. Release promotion happens only through the CI/CD
            pipeline after human review.
          </p>
        </Section>

        <Section number="4" title="Firewall and ingress/egress rules">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Default policy: <strong>deny all</strong>. Only explicitly
              allowlisted ports accept traffic.
            </li>
            <li>
              <strong>Allowed ingress:</strong> HTTPS (443) from the edge tier;
              SSH (22) restricted to an engineer allowlist of static IPs.
            </li>
            <li>
              <strong>Controlled egress:</strong> outbound calls to partner
              APIs (Shopee, TikTok Shop) originate from fixed, registered IPs
              that are whitelisted on the partner side &mdash; requests from
              any other origin are rejected by the marketplace itself.
            </li>
            <li>
              The database accepts connections only from the internal VPC. No
              public CIDR is ever allowed.
            </li>
          </ul>
        </Section>

        <Section number="5" title="Encryption">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>In transit:</strong> TLS 1.2+ enforced on all public and
              internal endpoints. Certificates are auto-renewed.
            </li>
            <li>
              <strong>At rest:</strong> marketplace access tokens, API keys,
              and sensitive fields are stored using AES-256-GCM via Rails
              Active Record Encryption.
            </li>
            <li>
              <strong>Secret management:</strong> Rails encrypted credentials
              with a master key stored outside the repository and rotated
              periodically. No credentials are ever logged or committed in
              plain text.
            </li>
          </ul>
        </Section>

        <Section number="6" title="Authentication and access control">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              User authentication via Devise with bcrypt password hashing and
              strong password policy.
            </li>
            <li>
              Role-based access control (RBAC): each user is granted only the
              minimum privileges required for their role.
            </li>
            <li>
              Partner integrations use official OAuth 2.0 flows. The customer
              explicitly authorizes each shop; marketplace user credentials
              (username/password) are never stored.
            </li>
            <li>
              Webhooks from partners are validated with cryptographic
              signatures (HMAC-SHA256) before any processing occurs.
            </li>
          </ul>
        </Section>

        <Section number="7" title="Monitoring and threat detection">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Centralized logs for application, server, CDN, and database,
              with a minimum retention of 90 days.
            </li>
            <li>
              Automated alerts for: elevated HTTP 5xx error rates, repeated
              authentication failures, anomalous request spikes, and failures
              in synchronization jobs.
            </li>
            <li>
              Per-IP and per-user rate limiting at the edge tier to mitigate
              brute-force and enumeration attacks.
            </li>
            <li>
              Static application security testing (Brakeman) runs on every
              commit; merges with detected vulnerabilities are automatically
              blocked.
            </li>
            <li>
              Periodic dependency review (CVE tracking) and scheduled patching
              of critical vulnerabilities.
            </li>
          </ul>
        </Section>

        <Section number="8" title="Incident response">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Formal procedure for classification, containment, and
              eradication of incidents.
            </li>
            <li>
              For incidents involving personal data, affected customers and
              the Brazilian Data Protection Authority (ANPD) are notified
              within 72 hours, as required by the LGPD.
            </li>
            <li>
              Integration partners (e.g., Shopee, TikTok Shop) are notified
              according to each API&apos;s contractual requirements.
            </li>
            <li>
              Documented post-mortems for every incident, with traceable
              corrective actions.
            </li>
          </ul>
        </Section>

        <Section number="9" title="References and standards">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Brazilian General Data Protection Law (LGPD &ndash; Law
              13.709/2018).
            </li>
            <li>OWASP Top 10 &mdash; compensating controls applied.</li>
            <li>Rails Security Guide (framework-official practices).</li>
            <li>
              Shopee Open Platform and TikTok Shop Partner Center terms and
              security policies.
            </li>
          </ul>
        </Section>

        <Section number="10" title="Contact">
          <p>
            Incident or vulnerability reports:{" "}
            <a
              href="mailto:seguranca@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80 print:text-black"
            >
              seguranca@kairos.com.br
            </a>
          </p>
          <p className="mt-2">
            Data Protection Officer (DPO):{" "}
            <a
              href="mailto:privacidade@kairos.com.br"
              className="text-white underline underline-offset-4 hover:text-white/80 print:text-black"
            >
              privacidade@kairos.com.br
            </a>
          </p>
        </Section>

        <footer className="mt-16 pt-10 border-t border-white/10 text-xs text-white/40 print:border-black/20 print:text-black/60">
          <p>
            Public document. The current version is always available at{" "}
            <span className="text-white/70 print:text-black/80">
              https://mythosai.vercel.app/security/network
            </span>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 scroll-mt-32 print:mt-8">
      <h2 className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4 print:text-black/60">
        {number}. {title}
      </h2>
      <div className="text-[15px] text-white/75 leading-relaxed print:text-black/85">
        {children}
      </div>
    </section>
  );
}
