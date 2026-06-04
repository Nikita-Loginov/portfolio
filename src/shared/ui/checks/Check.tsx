import classNames from "classnames";

import scss from "./Check.module.scss";

interface CheckProps {
  label: string;
  checked: boolean;
  type?: "checkbox" | "radio";
  name?: string;
  onChange?: (value: boolean) => void;
}

export const Check = ({
  label,
  checked,
  type = "checkbox",
  name,
  onChange,
}: CheckProps) => {
  const inputId = `${type}-${label.replace(/\s/g, "-")}`;

  return (
    <div className={scss["check"]}>
      <label className={scss["check__box"]} htmlFor={inputId}>
        <div
          className={classNames(
            scss["check__custom"],
            checked && scss["check__custom--active"]
          )}
        >
          <input
            id={inputId}
            type={type}
            checked={checked}
            name={name}
            onChange={(e) => onChange?.(e.target.checked)}
          />

          {label && (
            <div className={scss["check__content"]}>
              <p className="p4">{label}</p>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};
