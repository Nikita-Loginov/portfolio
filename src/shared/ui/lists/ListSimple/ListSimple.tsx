import Link from "next/link";
import { Button } from "../../buttons/Button/Button";
import scss from "./ListSimple.module.scss";

interface ListSimpleProps {
  items: {
    label: string;
    icon: React.ReactNode;
    to: string;
    ariaLabel?: string;
  }[];
  firstAsTitle?: boolean;
}

export const ListSimple = ({
  items,
  firstAsTitle = false,
}: ListSimpleProps) => {
  if (items.length < 1) return;

  return (
    <ul className={scss["list-simple"]}>
      {items.map((link, index) => {
        const isFirst = index === 0;
        const isTitle = isFirst && firstAsTitle;

        const content = (
          <div className={scss["list-simple__item"]}>
            <span className="icon icon--big">{link.icon}</span>

            {isTitle ? (
              <h1 className="p2">{link.label}</h1>
            ) : (
              <p className="p2">{link.label}</p>
            )}
          </div>
        );

        return (
          <li className={scss["list-simple__link"]} key={link.label}>
            {link.to ? (
              <Link href={link.to} aria-label={link.ariaLabel} target="_blank">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
};
