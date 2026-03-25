import { createPageMetadata } from "@/shared";
import { HomePage } from "@/pages/home";

export const metadata = createPageMetadata("Главная");

export default function Home() {
  return (
    <HomePage />
  );
}
