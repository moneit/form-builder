import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PlusIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        />
      </svg>
    )}
  </Icon>
);
