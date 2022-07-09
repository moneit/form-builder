import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const ArrowRightCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={16.89} baseHeight={16.89} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 16.89 16.89">
        <path
          fill={color}
          d="M9.007.562A8.445,8.445,0,1,1,.562,9.007,8.443,8.443,0,0,1,9.007.562Zm-.984,4.89,2.571,2.465H4.376a.815.815,0,0,0-.817.817V9.28a.815.815,0,0,0,.817.817h6.218L8.023,12.562A.818.818,0,0,0,8.01,13.73l.375.371a.814.814,0,0,0,1.154,0l4.519-4.515a.814.814,0,0,0,0-1.154L9.539,3.91a.814.814,0,0,0-1.154,0l-.375.371a.822.822,0,0,0,.014,1.171Z"
          transform="translate(-0.563 -0.563)"
        />
      </svg>
    )}
  </Icon>
);
