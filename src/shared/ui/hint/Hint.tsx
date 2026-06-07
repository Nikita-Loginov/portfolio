import classNames from "classnames";

import scss from "./Hint.module.scss";

interface HintProps {
  icon?: React.ReactNode;
  text?: React.ReactNode[];
  className?: string;
}

export const Hint = ({ icon, text, className }: HintProps) => {
  return (
    <div className={classNames(scss.hint, className)}>
      {icon && <span className="icon icon--big">{icon}</span>}

      <div className={scss["hint__content"]}>
        {text && text.length > 0 && (
          <div className="textbox">
            {text.map((item, index) => (
              <p className="p2" key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
