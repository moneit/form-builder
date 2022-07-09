import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const DesktopAnalyticsIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={96.012} baseHeight={88.824} {...props}>
    {(width, height, color, color2) => (
      <svg width={width} height={height} viewBox="0 0 96.012 88.824">
        <g transform="translate(0.8 0.8)">
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,6.34H48.907V0H0Z" transform="translate(22.59 80.484)"/>
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4}
                d="M93.286,36V7.315A7.315,7.315,0,0,0,85.971,0H7.315A7.315,7.315,0,0,0,0,7.315V60.542a7.315,7.315,0,0,0,7.315,7.315H85.971a7.315,7.315,0,0,0,7.315-7.315V35.626"
                transform="translate(0.4 0.4)"/>
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M93.286,0H0V6.282a5.576,5.576,0,0,0,5.576,5.576H87.71a5.576,5.576,0,0,0,5.576-5.576Z"
                transform="translate(0.4 56.4)"/>
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M26.265,12.227H0L4.075,0H21.736Z" transform="translate(33.905 68.257)"/>
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M2.717,1.358A1.358,1.358,0,1,1,1.358,0,1.358,1.358,0,0,1,2.717,1.358Z"
                transform="translate(45.685 61.118)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H32.8" transform="translate(9.521 33.2)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H11.2" transform="translate(75.121 8.8)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H11.2" transform="translate(57.521 8.8)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H11.2" transform="translate(8.721 8.8)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H32.8" transform="translate(9.521 39.6)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,.4H32.8" transform="translate(9.521 46)"/>
          <path stroke={color2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,6.4H19.2V0H0Z" transform="translate(9.522 19.6)"/>
          <path stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.4} d="M0,37.6,44.8,0" transform="translate(48.721 18.8)"/>
        </g>
      </svg>
    )}
  </Icon>
);
