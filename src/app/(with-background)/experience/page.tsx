import { createPageMetadata } from "@/shared";
import { ExperiencePage } from "@/widgets/experience";

export const metadata = createPageMetadata("Мой опыт");

export default function Experience() {
  return <ExperiencePage />
}
