import classNames from "classnames";

import scss from "./Tag.module.scss";

interface TagProps {
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: "small" | "medium";
  theme?: "primary" | "secondary" | "flat";
  iconSize?: "small" | "medium" | "big";
  className?: string;
}

export const Tag = ({
  size = "small",
  theme = "primary",
  iconSize = "small",
  children,
  className,
  iconLeft,
  iconRight,
}: TagProps) => {
  const iconClassNames = classNames({
    icon: true,
    [`icon--${iconSize}`]: true,
  });

  const tagClassNames = classNames(
    scss.tag,
    scss[`tag--size-${size}`],
    scss[`tag--theme-${theme}`],
    className
  );

  return (
    <div className={tagClassNames}>
      {iconLeft && <span className={iconClassNames}>{iconLeft}</span>}

      {children}

      {iconRight && <span className={iconClassNames}>{iconRight}</span>}
    </div>
  );
};
