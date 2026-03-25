'use client'

import { Tooltip as TooltipAntd } from "antd";
import { TooltipProps } from "antd";

import scss from "./Tooltip.module.scss";

type CustomTooltipProps = TooltipProps;

export const Tooltip = ({ children, ...rest }: CustomTooltipProps) => {
  return (
    <TooltipAntd
      classNames={{
        root: scss.tooltip,
      }}
      {...rest}
    >
      {children}
    </TooltipAntd>
  );
};
