import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PlayIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={240} baseHeight={240} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 240 240">
        <path
          fill={color}
          d="M175,109.59 9 1A6 6,0,0,0,3.06 0.62 5.4 5.4,0,0,0,0,5.43V222.69a5.41 5.41,0,0,0,3.06 4.81A6 6,0,0,0,9,227.16L175,118.53a5.28 5.28,0,0,0,0-8.94Z"
          transform="translate(48 5)"
        />
      </svg>
    )}
  </Icon>
);
