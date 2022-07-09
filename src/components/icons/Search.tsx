import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const SearchIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={16.957} baseHeight={16.957} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 16.957 16.957">
        <g transform="translate(-3.5 -3.5)">
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.427,10.963A6.463,6.463,0,1,1,10.963,4.5a6.463,6.463,0,0,1,6.463,6.463Z"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28.489,28.489l-3.514-3.514" transform="translate(-9.447 -9.447)"/>
        </g>
      </svg>
    )}
  </Icon>
);
