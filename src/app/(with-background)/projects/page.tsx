import { createPageMetadata } from "@/shared";
import { ProjectsPage } from "@/widgets/projects";

export const metadata = createPageMetadata("Мои проекты");

export default function Projects() {
  return <ProjectsPage />
}
