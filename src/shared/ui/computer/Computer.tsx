import scss from "./Computer.module.scss";

interface ComputerProps {
  children: React.ReactNode;
  topContent?: React.ReactNode;
}

export const Computer = ({ children, topContent }: ComputerProps) => {
  return (
    <div className={scss["computer"]}>
      <div className={scss["computer__top"]}>
        <div className={scss["computer__btns"]}>
          <span></span>

          <span></span>

          <span></span>
        </div>

        {topContent ? topContent : null}
      </div>

      <div className={scss["computer__content"]}>{children}</div>
    </div>
  );
};
