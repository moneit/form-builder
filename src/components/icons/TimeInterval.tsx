import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const TimeIntervalIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={33.649} baseHeight={33.649} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 33.649 33.649">
        <path
          fill={color}
          d="M26.958,12.691A10.051,10.051,0,0,0,19.824,9.73V19.824l-7.134,7.134A10.088,10.088,0,1,0,26.958,12.691ZM19.824,3A16.824,16.824,0,1,0,36.649,19.824,16.831,16.831,0,0,0,19.824,3Zm0,30.284a13.46,13.46,0,1,1,13.46-13.46A13.456,13.456,0,0,1,19.824,33.284Z"
          transform="translate(-3 -3)"
        />
      </svg>
    )}
  </Icon>
);
