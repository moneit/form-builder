import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const MoreCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={21.656} baseHeight={21.656} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 21.656 21.656">
        <path
          fill={color}
          d="M12.162,5.773a10.828,10.828,0,1,0,10.828,10.828A10.828,10.828,0,0,0,12.162,5.773ZM7.52,15a1.52,1.52,0,1,0,1.52,1.52A1.525,1.525,0,0,0,7.52,15Zm9.121,0a1.52,1.52,0,1,0,1.52,1.52A1.525,1.525,0,0,0,16.641,15Zm-4.56,0a1.52,1.52,0,1,0,1.52,1.52A1.525,1.525,0,0,0,12.081,15Z"
          transform="translate(-1.334 -5.773)"
          fillRule="evenodd"
        />
      </svg>
    )}
  </Icon>
);
