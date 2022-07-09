import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PauseIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M-1,2l0,20l6,0l0,-20Zm10,0l0,20l6,0l0,-20Z"
          transform="translate(4.8 0)"
        />
      </svg>
    )}
  </Icon>
);
