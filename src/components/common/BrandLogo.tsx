import { SITE } from "@/data/site";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  const sharedClass =
    `object-contain object-center h-auto w-[min(100%,124px)] sm:w-[min(100%,188px)] md:w-[min(100%,252px)] ${className}`.trim();

  return (
    <>
      <img src="/logo-black-text.png" alt={SITE.name} className={`${sharedClass} dark:hidden`} />
      <img src="/logo-white-text.png" alt={SITE.name} className={`${sharedClass} hidden dark:block`} />
    </>
  );
}
