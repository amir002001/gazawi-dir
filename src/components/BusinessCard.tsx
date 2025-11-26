import type { BusinessProfile } from "../data/businesses";

const labelClasses =
  "text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-flag-charcoal/60";

const infoValueClasses = "text-flag-charcoal text-base";

const PLACEHOLDER_INSTAGRAM_EMBED =
  "https://www.instagram.com/pymtoronto/embed";

const isUrl = (value: string) => value.startsWith("http");

export type BusinessCardProps = {
  profile: BusinessProfile;
};

export function BusinessCard({ profile }: BusinessCardProps) {
  const {
    name,
    category,
    contact,
    emailOrSocial,
    phone,
    story,
    instagramEmbedUrl,
  } = profile;
  const embedUrl = instagramEmbedUrl ?? PLACEHOLDER_INSTAGRAM_EMBED;

  const infoRows = [
    contact && {
      label: "Contact",
      value: contact,
    },
    emailOrSocial &&
      !isUrl(emailOrSocial) && {
        label: "Email",
        value: emailOrSocial,
      },
    phone && {
      label: "Phone",
      value: phone,
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="card-tape relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-flag-green/25 bg-flag-cream/90 p-6 text-sm shadow-card transition hover:-translate-y-1 hover:border-flag-green/50 hover:shadow-card-strong">
      <div
        className="pointer-events-none absolute inset-0 fiber-paper opacity-70 mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-2 bg-linear-to-r from-flag-green/90 via-flag-sand/80 to-flag-red/70 opacity-80"
        aria-hidden
      />

      <header className="relative space-y-1">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-flag-green">
          {category}
        </p>
        <h3 className="text-2xl font-bold text-flag-charcoal">{name}</h3>
        {contact ? (
          <p className="text-sm text-flag-charcoal/75">{contact}</p>
        ) : null}
      </header>

      {infoRows.length > 0 && (
        <section className="relative rounded-xl border border-flag-green/25 bg-white/75 p-4">
          <dl className="space-y-3">
            {infoRows.map((row) => (
              <div key={row.label} className="flex flex-col gap-1">
                <dt className={labelClasses}>{row.label}</dt>
                <dd>
                  {isUrl(row.value) ? (
                    <a
                      href={row.value}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-1 text-flag-green underline decoration-flag-red/40 decoration-2 underline-offset-4 transition hover:decoration-flag-red"
                    >
                      {new URL(row.value).hostname.replace(/^www\./, "")}
                    </a>
                  ) : (
                    <span className={infoValueClasses}>{row.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="relative space-y-3 rounded-xl border border-flag-green/15 bg-white/80 p-4 text-[0.95rem] leading-relaxed text-flag-charcoal/85">
        {story.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className="first:before:mr-2 first:before:content-['“'] last:after:ml-2 last:after:content-['”']"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="relative mt-auto rounded-xl border border-flag-green/30 bg-white/70 p-3 shadow-soft">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-flag-charcoal/60">
          Instagram glimpse
        </p>
        <div className="relative overflow-hidden rounded-lg border border-flag-green/20 bg-flag-charcoal/5">
          <iframe
            title={`${name} Instagram window`}
            src={`${embedUrl}?cr=1&v=12`}
            loading="lazy"
            allow="encrypted-media"
            width="100%"
            className="w-full aspect-8/7"
          />
        </div>
      </div>
    </article>
  );
}
