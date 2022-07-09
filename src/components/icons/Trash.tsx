import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const TrashIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={12.445} baseHeight={16.001} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 12.445 16.001">
        <path
          fill={color}
          d="M8.389,18.723A1.783,1.783,0,0,0,10.167,20.5h7.112a1.783,1.783,0,0,0,1.778-1.778V8.056H8.389ZM19.945,5.389H16.834L15.945,4.5H11.5l-.889.889H7.5V7.167H19.945Z"
          transform="translate(-7.5 -4.5)"
        />
      </svg>
    )}
  </Icon>
);
