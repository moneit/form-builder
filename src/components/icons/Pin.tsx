import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PinIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={18} baseHeight={18} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 18 18">
        <path
          fill={color}
          d="M18.406,16.053l-5.758-3.324a1.477,1.477,0,1,0-1.477,2.558l5.757,3.324a1.477,1.477,0,0,0,1.478-2.558Zm-4.748-3.595,4.478,2.585L19.659,10.8,16.566,9.02l-2.909,3.438Zm-3.3,10.889,4.284-5.2-1.919-1.108-2.365,6.312ZM21.509,8.461,17.672,6.245a1.108,1.108,0,0,0-1.108,1.919L20.4,10.38a1.108,1.108,0,1,0,1.107-1.919Z"
          transform="matrix(0.914, 0.407, -0.407, 0.914, 0.18, -10.438)"
        />
      </svg>
    )}
  </Icon>
);
