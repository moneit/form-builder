import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PhoneOutIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={20.834} baseHeight={20.706} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 20.834 20.706">
        <path
          fill={color}
          d="M0,3.8A1,1,0,0,1,1,2.8H4.477a.994.994,0,0,1,.992.992,11.2,11.2,0,0,0,.57,3.55.993.993,0,0,1-.252,1.014L3.6,10.549A15.088,15.088,0,0,0,10.158,17.1l2.188-2.187a.985.985,0,0,1,1.014-.238,11.249,11.249,0,0,0,3.551.569.994.994,0,0,1,.992.992v3.471a1,1,0,0,1-.992,1A16.906,16.906,0,0,1,0,3.8Z"
        />
        <path
          fill={color}
          d="M12.756,8.08V.476H14.1l0,5.306L19.883,0l.951.948L15.053,6.734l5.307,0V8.08Z"
          transform="translate(33.3 8.2),rotate(180)"
        />
      </svg>
    )}
  </Icon>
);
