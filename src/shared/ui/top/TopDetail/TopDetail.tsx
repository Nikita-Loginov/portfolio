"use client";

import classNames from "classnames";

import { Button } from "../../buttons/Button/Button";

import { Icons } from "@/shared/icons";

import { useBackNavigation } from "@/shared/hooks";

import scss from "./TopDetail.module.scss";

interface TopDetailProps {
  back?: boolean;
  fallbackPath?: string;
  children: React.ReactNode;
  className?: string;
}

export const TopDetail = ({ back, fallbackPath, children, className }: TopDetailProps) => {
  const handleBack = useBackNavigation(fallbackPath || "");

  return (
    <div className={classNames(scss["top-detail"], className)}>
      {back && (
        <Button
          theme="secondary"
          onClick={handleBack}
          iconLeft={<Icons.LeftArrowIcon />}
          tooltip="Вернуться назад"
        >
          <p className="p2">Назад</p>
        </Button>
      )}

      {children}
    </div>
  );
};
