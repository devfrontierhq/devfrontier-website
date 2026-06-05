import EventNotificationForm from "@/components/EventNotificationForm";
import SocialLinks from "@/components/SocialLinks";
import { SITE } from "@/data/site";
import { withMuiProvider } from "@/lib/with-mui-provider";

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:items-start sm:gap-8">
          <EventNotificationForm />
          <SocialLinks />
        </div>

        <p className="mt-6 border-t border-border pt-4 text-center text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default withMuiProvider(SiteFooter);
