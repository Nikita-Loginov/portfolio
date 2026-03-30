import scss from "./Hint.module.scss";

interface HintProps {
  icon?: React.ReactNode;
  text?: React.ReactNode[];
}

export const Hint = ({ icon, text }: HintProps) => {
  return (
    <div className={scss.hint}>
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
