import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PlayCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={19} baseHeight={19} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 19 19">
        <path
          fill={color}
          d="M12.613,3.375a9.238,9.238,0,1,0,9.238,9.238A9.236,9.236,0,0,0,12.613,3.375Zm3.722,9.411-6.093,3.686a.2.2,0,0,1-.3-.173V8.926a.2.2,0,0,1,.3-.173l6.093,3.686A.2.2,0,0,1,16.334,12.786Z"
          transform="translate(-3.15 -3.15)"
        />
      </svg>
    )}
  </Icon>
);
