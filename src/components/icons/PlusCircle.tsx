import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PlusCircleIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={29.363} baseHeight={29.363} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 29.363 29.363">
        <path
          fill={color}
          d="M17.681,3A14.681,14.681,0,1,0,32.363,17.681,14.687,14.687,0,0,0,17.681,3Zm7.341,16.149H19.149v5.873H16.213V19.149H10.341V16.213h5.873V10.341h2.936v5.873h5.873Z"
          transform="translate(-3 -3)"
        />
      </svg>
    )}
  </Icon>
);
