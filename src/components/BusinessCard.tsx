import type { LucideIcon } from "lucide-react";
import { Globe, Mail, Phone } from "lucide-react";
import type { BusinessProfile } from "../data/businesses";

const ensureProtocol = (value: string) =>
  value.startsWith("http") ? value : `https://${value}`;

const sanitizePhone = (value: string) => value.replace(/\s+/g, "");

type DetailItem = {
  key: string;
  label: string;
  value: string;
  icon: LucideIcon;
  href: string;
  target?: "_blank";
};

export type BusinessCardProps = {
  profile: BusinessProfile;
};

export function BusinessCard({ profile }: BusinessCardProps) {
  const {
    name,
    category,
    email,
    website,
    phone,
    story,
    instagramEmbedUrl,
    pdfUrl,
  } = profile;

  const detailItems = [
    website && {
      key: "website",
      label: "Website",
      value: website,
      icon: Globe,
      href: ensureProtocol(website),
      target: "_blank" as const,
    },
    email && {
      key: "email",
      label: "Email",
      value: email,
      icon: Mail,
      href: `mailto:${email}`,
    },
    phone && {
      key: "phone",
      label: "Phone",
      value: phone,
      icon: Phone,
      href: `tel:${sanitizePhone(phone)}`,
    },
  ].filter((item): item is DetailItem => Boolean(item));

  const safePdfUrl = pdfUrl ? encodeURI(pdfUrl) : undefined;

  return (
    <article className="card-tape relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-flag-green/25 bg-flag-cream/95 p-6 text-sm shadow-card transition hover:-translate-y-1 hover:border-flag-red/40 hover:shadow-card-strong">
      <div
        className="pointer-events-none absolute inset-0 fiber-paper opacity-70 mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-2 rounded-b-full bg-flag-red/70 opacity-70"
        aria-hidden
      />

      <header className="relative space-y-3">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-flag-green">
          {category}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold text-flag-charcoal flex-1">
            {name}
          </h3>
          {detailItems.length > 0 && (
            <div className="flex items-center gap-2">
              {detailItems.map(
                ({ key, label, value, icon: Icon, href, target }) => (
                  <a
                    key={key}
                    href={href}
                    target={target}
                    rel={target === "_blank" ? "noreferrer" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-flag-red/30 bg-white/85 text-flag-red shadow-sm transition hover:-translate-y-0.5 hover:border-flag-red/60 hover:bg-flag-red/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-green"
                    aria-label={`${label}: ${value}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </header>

      <section className="relative space-y-4 text-base leading-relaxed text-flag-charcoal/90">
        <div className="inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-flag-green/80">
          <span
            className="inline-block h-px w-10 bg-flag-green/50"
            aria-hidden
          />
          Their Story
        </div>
        <div className="space-y-3">
          {story.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="before:mr-2 before:text-flag-red before:content-['“'] after:ml-2 after:text-flag-red after:content-['”']"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {(safePdfUrl || instagramEmbedUrl) && (
        <div className="mt-auto space-y-4">
          {safePdfUrl && (
            <div className="relative rounded-xl border border-flag-green/30 bg-white/70 p-3 shadow-soft">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-flag-charcoal/60">
                Portfolio PDF
              </p>
              <div className="relative overflow-hidden rounded-lg border border-flag-green/20 bg-flag-charcoal/5">
                <iframe
                  title={`${name} PDF preview`}
                  src={`${safePdfUrl}#toolbar=0&navpanes=0`}
                  loading="lazy"
                  className="h-[26rem] w-full"
                />
              </div>
              <a
                href={safePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-flag-green/50 px-4 py-2 text-sm font-semibold text-flag-green transition hover:-translate-y-0.5 hover:border-flag-green/70 hover:text-flag-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-red"
              >
                Open full PDF
                <span aria-hidden>↗</span>
              </a>
            </div>
          )}

          {instagramEmbedUrl && (
            <div className="relative rounded-xl border border-flag-green/30 bg-white/70 p-3 shadow-soft">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-flag-charcoal/60">
                Instagram glimpse
              </p>
              <div className="relative overflow-hidden rounded-lg border border-flag-green/20 bg-flag-charcoal/5">
                <iframe
                  title={`${name} Instagram window`}
                  src={`${instagramEmbedUrl}?cr=1&v=12`}
                  loading="lazy"
                  allow="encrypted-media"
                  width="100%"
                  className="w-full aspect-8/7"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
