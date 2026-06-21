export interface SiteMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "threads" | "bluesky" | "github";
}
