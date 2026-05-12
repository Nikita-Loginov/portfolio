import { createPageMetadata } from "@/shared";
import { ContactsPage } from "@/widgets/contacts/ui/ContactsPage/ContactsPage";

export const metadata = createPageMetadata("Мои контакты");

export default function Contacts() {
  return <ContactsPage />
}
