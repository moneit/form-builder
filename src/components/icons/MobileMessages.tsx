import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const MobileMessagesIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={67.731} baseHeight={105.154} {...props}>
    {(width, height, color, color2) => (
      <svg width={width} height={height} viewBox="0 0 67.731 105.154">
        <g transform="translate(1 1)">
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M64.736,33.579v38.6H0V0" transform="translate(0.257 30.978)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,13.826V0H64.736V48.529" transform="translate(0.257)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H64.729" transform="translate(0.261 84.377)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,2.893A2.892,2.892,0,1,1,2.893,5.786,2.893,2.893,0,0,1,0,2.893Z"
                transform="translate(30.518 91.017)"/>
          <path fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round"
                d="M6.644,0h45.91a6.376,6.376,0,0,1,6.357,6.357V20.836a6.375,6.375,0,0,1-6.357,6.357H13a6.375,6.375,0,0,1-6.356-6.357V7.213L0,0Z"
                transform="translate(0 21.819)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round"
                d="M52.267,0H6.357A6.375,6.375,0,0,0,0,6.356v9.359a6.376,6.376,0,0,0,6.357,6.357H45.91a6.375,6.375,0,0,0,6.357-6.357v-8.5L58.911,0Z"
                transform="translate(6.82 55.541)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H37.081" transform="translate(14.414 63.096)"/>
          <path fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H37.081" transform="translate(14.414 28.585)"/>
          <path fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H29.135" transform="translate(14.414 34.677)"/>
          <path fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H34.167" transform="translate(14.414 40.769)"/>
          <path fill="none" stroke={color2} strokeWidth="2px" strokeLinecap="round" strokeMiterlimit="round" d="M0,.5H29.135" transform="translate(14.414 69.188)"/>
        </g>
      </svg>
    )}
  </Icon>
);
