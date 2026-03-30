import { createPageMetadata } from "@/shared";
import { AboutPage } from "@/widgets/about";

export const metadata = createPageMetadata("Обо мне");

export default function About() {
  return <AboutPage />
}
