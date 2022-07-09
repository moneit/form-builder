import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const LogoOutlineIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36} baseHeight={36} {...props}>
    {(width, height, color, color2) => (
      <svg width={width} height={height} viewBox="0 0 36 36">
        <g transform="translate(3.125 1.483)">
          <path fill="white" stroke={color2} strokeLinecap="square" strokeWidth={2} d="M-303.167-263.545v-16.561l-14.916-8.281L-333-280.106v16.561l14.916,8.281Z"
                transform="translate(333 288.387)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeWidth={2} d="M0,0,12.609,7.276" transform="translate(11.789 10.772)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeWidth={2} d="M-207.343,0l-12.609,7.276" transform="translate(225.293 10.772)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeWidth={2} d="M0-119.844l12.636-7.288" transform="translate(11.773 141.62)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeWidth={2} d="M-207.8-119.844l-12.636-7.288" transform="translate(225.767 141.62)"/>
        </g>
      </svg>
    )}
  </Icon>
);
