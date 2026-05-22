import { SOCIALS_CONFIG } from "../socials";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Никита Логинов",
  jobTitle: "Frontend Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  sameAs: [SOCIALS_CONFIG.github, SOCIALS_CONFIG.telegram],
};
