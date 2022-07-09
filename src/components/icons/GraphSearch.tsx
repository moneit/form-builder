import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const GraphSearchIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={22} baseHeight={22} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 22 22">
        <g transform="translate(0.913 1.826)">
          <path fill={color}
                d="M18.241,17.04a4.171,4.171,0,1,0-1.3,1.288l2.849,2.849,1.3-1.3Zm-3.47.1a2.283,2.283,0,1,1,2.283-2.283A2.284,2.284,0,0,1,14.771,17.14Zm-.329-7.762a5.376,5.376,0,0,0-1.918.411l-.5-.758-3.47,5.643L5.8,11.46,2.488,16.766,1,15.7,5.566,8.392l2.74,3.2,3.653-5.936Zm2.365.457a5.409,5.409,0,0,0-1.872-.447L19.61,2,21.09,3.078Z"
                transform="translate(-1 -2)" />
        </g>
      </svg>
    )}
  </Icon>
);
