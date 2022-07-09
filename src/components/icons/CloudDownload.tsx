import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const CloudDownloadIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={27} baseHeight={19} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 27 19">
        <path
          fill={color}
          d="M21.345,12.663A8.265,8.265,0,0,0,5.9,10.457,6.616,6.616,0,0,0,6.619,23.65H20.959a5.5,5.5,0,0,0,.386-10.987Zm-2.592,3.265-5.516,5.516L7.722,15.928h3.309V11.516h4.412v4.412Z"
          transform="translate(0.25 -5.4)"
        />
      </svg>
    )}
  </Icon>
);
