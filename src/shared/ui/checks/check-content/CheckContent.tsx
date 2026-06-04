import classNames from 'classnames';

import scss from './CheckContent.module.scss';

interface CheckContentContent {
  children: React.ReactNode;
  checked: boolean;
  onChange?: (value: boolean) => void;
  bottomChildren?: React.ReactNode;
  className?: string;
  error?: string;
}

export const CheckContent = ({
  children,
  checked,
  onChange,
  bottomChildren,
  className,
  error
}: CheckContentContent) => {
  return (
    <div className={scss['check-content']}>
      <label
        className={classNames(
          scss['check-content__info'],
          checked && scss['check-content__info--active']
        )}
      >
        <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} />

        <div className={classNames(scss['check-content__content'], className)}>{children}</div>
      </label>

      {bottomChildren && <div className={scss['check-content__bottom']}>{bottomChildren}</div>}

      {error && <p className={classNames('p4', scss['check-content__error'])}>{error}</p>}
    </div>
  );
};
