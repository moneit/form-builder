import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const InfoCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={12.425} baseHeight={12.425} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 12.425 12.425">
        <path
          fill={color}
          d="M9.587,3.375A6.212,6.212,0,1,0,15.8,9.587,6.215,6.215,0,0,0,9.587,3.375Zm.627,9.319H8.96V8.96h1.254Zm0-4.958H8.96V6.481h1.254Z"
          transform="translate(-3.375 -3.375)"
        />
      </svg>
    )}
  </Icon>
);
