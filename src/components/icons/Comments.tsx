import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const CommentsIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={19.464} baseHeight={19.464} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 19.464 19.464">
        <path
          fill={color}
          d="M20.954,20.369a1.973,1.973,0,0,0,1.081,1.76V22.4a4.022,4.022,0,0,1-3.467-1.217,5.433,5.433,0,0,1-1.4.182A4.62,4.62,0,0,1,12.3,17.038a4.62,4.62,0,0,1,4.866-4.325,4.62,4.62,0,0,1,4.866,4.325,3.99,3.99,0,0,1-.9,2.508,1.962,1.962,0,0,0-.18.823ZM11.222,5.143c4.7,0,8.532,3.052,8.648,6.852a6.63,6.63,0,0,0-2.7-.566,6.439,6.439,0,0,0-4.294,1.591,5.338,5.338,0,0,0-1.856,4.018,5.185,5.185,0,0,0,.469,2.159c-.088,0-.177,0-.266,0a10.684,10.684,0,0,1-1.349-.085,8.425,8.425,0,0,1-6.221,2.24V20.9a3.442,3.442,0,0,0,2.163-2.782,3.263,3.263,0,0,0-.037-.485,6.617,6.617,0,0,1-3.207-5.463C2.571,8.29,6.444,5.143,11.222,5.143Z"
          transform="translate(-2.571 -5.143)"
        />
      </svg>
    )}
  </Icon>
);