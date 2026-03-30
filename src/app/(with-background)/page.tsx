import { createPageMetadata } from "@/shared";
import { HomePage } from "@/widgets/home";

export const metadata = createPageMetadata("Главная");

export default function Home() {
  return (
    <HomePage />
  );
}
