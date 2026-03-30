import { createPageMetadata } from "@/shared";
import { SkillsPage } from "@/widgets/skills";

export const metadata = createPageMetadata("Мои навыки");

export default function Skills() {
  return <SkillsPage />
}
