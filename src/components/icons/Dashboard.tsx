import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const DashboardIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={19.124} baseHeight={19.124} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 19.124 19.124">
        <path
          fill={color}
          d="M4.5,15.125H13V4.5H4.5Zm0,8.5H13V17.25H4.5Zm10.625,0h8.5V13h-8.5Zm0-19.124v6.375h8.5V4.5Z"
          transform="translate(-4.5 -4.5)"
        />
      </svg>
    )}
  </Icon>
);
