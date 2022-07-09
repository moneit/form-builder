import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const DeveloperIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={22.995} baseHeight={22.995} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 22.995 22.995">
        <path
          fill={color}
          d="M122.5,111a11.5,11.5,0,1,0,11.5,11.5A11.51,11.51,0,0,0,122.5,111Zm-3.952,14.081-1.682,1.682-3.833-3.832,3.833-3.833,1.682,1.682-2.15,2.15Zm3.772,5.491-2.343-.413,2.775-15.737,2.343.413Zm5.815-3.81-1.682-1.682,2.151-2.15-2.151-2.15,1.682-1.682,3.833,3.833Z"
          transform="translate(-111 -111)"
        />
      </svg>
    )}
  </Icon>
);
