import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const CaretRightIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M10 17l5-5-5-5v10z"
        />
      </svg>
    )}
  </Icon>
);
