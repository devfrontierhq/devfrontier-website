import { PARTNERS, type Partner } from "@/data/partners";
import { TEAM_MEMBERS, type TeamMember } from "@/data/team";

function TeamMemberCard({ name, role, image }: TeamMember) {
  return (
    <article className="landing-team-card flex flex-col items-center text-center">
      <div className="mb-4 size-20 overflow-hidden rounded-full border border-border bg-muted/60 sm:size-24">
        {image ? (
          <img
            src={image}
            alt=""
            width={96}
            height={96}
            className="size-full object-cover"
          />
        ) : null}
      </div>
      <h4 className="text-base font-semibold tracking-tight sm:text-lg">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{role}</p>
    </article>
  );
}

function PartnerCard({ name, logo, href }: Partner) {
  const content = (
    <>
      {logo ? (
        <img
          src={logo}
          alt={name}
          width={160}
          height={64}
          className="mx-auto h-10 w-auto max-w-full object-contain object-center sm:h-12"
        />
      ) : (
        <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
          {name}
        </span>
      )}
    </>
  );

  const className =
    "landing-partner-card flex min-h-[5.5rem] items-center justify-center px-6 py-5 sm:min-h-[6rem]";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-colors hover:border-primary/35`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function EmptyPlaceholder({ message }: { message: string }) {
  return (
    <p className="col-span-full rounded-xl border border-dashed border-border bg-muted/25 px-6 py-10 text-center text-sm text-muted-foreground sm:text-base">
      {message}
    </p>
  );
}

export default function TeamPartnersSection() {
  return (
    <section id="team-partners" className="landing-section border-t border-border bg-muted/15">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 sm:mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            核心成員
          </h3>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TEAM_MEMBERS.length > 0 ? (
              TEAM_MEMBERS.map((member) => (
                <li key={member.id}>
                  <TeamMemberCard {...member} />
                </li>
              ))
            ) : (
              <EmptyPlaceholder message="執行團隊名單即將公布，敬請期待。" />
            )}
          </ul>
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="mb-6 text-center text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            贊助夥伴
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PARTNERS.length > 0 ? (
              PARTNERS.map((partner) => (
                <li key={partner.id}>
                  <PartnerCard {...partner} />
                </li>
              ))
            ) : (
              <EmptyPlaceholder message="贊助夥伴資訊即將公布，歡迎與我們洽談合作。" />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
