import type { BusinessProfile } from "../data/businesses";

const labelClasses =
  "text-sm font-semibold tracking-wide uppercase text-flag-sand";

const infoValueClasses = "text-flag-charcoal text-base";

const isUrl = (value: string) => value.startsWith("http");

export type BusinessCardProps = {
  profile: BusinessProfile;
};

export function BusinessCard({ profile }: BusinessCardProps) {
  const { name, category, contact, emailOrSocial, phone, story } = profile;

  const infoRows = [
    contact && {
      label: "Contact",
      value: contact,
    },
    emailOrSocial && {
      label: isUrl(emailOrSocial) ? "Social" : "Email",
      value: emailOrSocial,
    },
    phone && {
      label: "Phone",
      value: phone,
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="group flex h-full flex-col gap-4 rounded-3xl border border-flag-green/20 bg-white/90 p-6 shadow-card transition hover:-translate-y-1 hover:border-flag-green/60 hover:shadow-card-strong">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-flag-charcoal/60">
          {category}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-flag-charcoal">{name}</h3>
      </header>

      <section className="space-y-1">
        {infoRows.map((row) => (
          <div key={row.label} className="flex flex-col">
            <span className={labelClasses}>{row.label}</span>
            {isUrl(row.value) ? (
              <a
                href={row.value}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 text-flag-green underline decoration-flag-red/40 decoration-2 underline-offset-4 transition group-hover:decoration-flag-red"
              >
                {new URL(row.value).hostname.replace(/^www\./, "")}
              </a>
            ) : (
              <span className={infoValueClasses}>{row.value}</span>
            )}
          </div>
        ))}
      </section>

      <div className="mt-auto space-y-3 text-sm leading-relaxed text-flag-charcoal/80">
        {story.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
