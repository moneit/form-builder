import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const DownloadIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
        />
      </svg>
    )}
  </Icon>
);
