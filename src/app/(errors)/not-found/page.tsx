import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description:
    "Извините, запрошенная страница не существует. Вернитесь на главную или проверьте правильность введенного адреса.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <p>404</p>;
}
