import scss from "./Progress.module.scss";

interface ProgressProps {
  progress?: number;
}

export const Progress = ({ progress }: ProgressProps) => {
  return (
    <div className={scss["progress"]}>
      <div className={scss["progress__line"]}>
        <span style={{width: `${progress}%`}}></span>
      </div>

      <div className={scss["progress__content"]}>
        <p className="p3">{progress ? progress : 0}%</p>
      </div>
    </div>
  );
};
