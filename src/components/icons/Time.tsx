import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const TimeIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={31.484} baseHeight={31.484} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 31.484 31.484">
        <path
          fill={color}
          d="M18.726,3A15.742,15.742,0,1,0,34.484,18.742,15.734,15.734,0,0,0,18.726,3Zm.016,28.336A12.594,12.594,0,1,1,31.336,18.742,12.59,12.59,0,0,1,18.742,31.336Zm.787-20.465H17.168v9.445l8.265,4.959,1.181-1.936-7.084-4.2Z"
          transform="translate(-3 -3)"
        />
      </svg>
    )}
  </Icon>
);
