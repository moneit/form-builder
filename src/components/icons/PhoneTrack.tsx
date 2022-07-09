import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PhoneTrackIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={114.185} baseHeight={114.185} {...props}>
    {(width, height, color, color2) => (
      <svg width={width} height={height} viewBox="0 0 114.185 114.185">
        <g transform="translate(1.25 1.25)">
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5}
                d="M15.158,31.42a1.561,1.561,0,0,0,1.912.246A43.381,43.381,0,0,0,28.622,21.182c1.114-1.428,2.057-2.988,3.1-4.471a.955.955,0,0,0-.165-1.471,38.968,38.968,0,0,1-2.843-2.853,3.169,3.169,0,0,1-.722-1.779c-.071-2.7-.041-5.395-.026-8.093A2.5,2.5,0,0,1,30.426.03q4.5-.06,8.994,0c1.7.023,2.313.9,2.456,2.742.757,9.731-3.269,17.656-9.342,24.782A43.212,43.212,0,0,1,15.154,40.307C10.923,41.94,6.519,41.983,2.1,41.829A2.055,2.055,0,0,1,.037,39.616q-.073-4.686,0-9.373a2.307,2.307,0,0,1,2.285-2.265c2.891-.028,5.783-.039,8.674.02a2.263,2.263,0,0,1,1.351.66C13.848,30.106,13.621,29.875,15.158,31.42Z"
                transform="translate(41.037 42.813)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M0,21.049A21.049,21.049,0,0,1,21.049,0" transform="translate(37.474 39.013)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M0,30.977A30.978,30.978,0,0,1,30.977,0" transform="translate(27.546 28.701)"/>
          <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M0,10.524A10.524,10.524,0,0,1,10.524,0" transform="translate(47.999 49.597)"/>
          <path fill="none" stroke={color2} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M0,48.981A48.982,48.982,0,1,1,48.982,97.962,48.981,48.981,0,0,1,0,48.981Z"
                transform="translate(6.617 6.985)"/>
          <path fill="none" stroke={color2} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M.385,0V13.475" transform="translate(55.214)"/>
          <path fill="none" stroke={color2} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M.385,0V13.475" transform="translate(55.214 98.21)"/>
          <path fill="none" stroke={color2} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M13.475.385H0" transform="translate(98.21 55.458)"/>
          <path fill="none" stroke={color2} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2.5} d="M13.475.385H0" transform="translate(0 55.458)"/>
        </g>
      </svg>
    )}
  </Icon>
);
