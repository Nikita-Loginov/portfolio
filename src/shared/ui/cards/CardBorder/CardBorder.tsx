import scss from "./CardBorder.module.scss";

interface CardBorderProps {
  children?: React.ReactNode;
}

export const CardBorder = ({ children }: CardBorderProps) => {
  return (
    <div className={scss["card-border"]}>
      <div className={scss["card-border__decors"]}>
        <span></span>

        <span></span>

        <span></span>

        <span></span>
      </div>

      <div className={scss["card-border__content"]}>{children}</div>
    </div>
  );
};
