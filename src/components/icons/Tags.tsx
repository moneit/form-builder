import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const TagsIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={14.015} baseHeight={11.168} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 14.015 11.168">
        <path
          fill={color}
          d="M16.534,7.716H12.263a1.486,1.486,0,0,0-.911.378l-5.3,5.3a.535.535,0,0,0,0,.755l4.584,4.584a.535.535,0,0,0,.755,0l5.3-5.3a1.486,1.486,0,0,0,.378-.911V8.25A.535.535,0,0,0,16.534,7.716Zm-2.669,4.271a1.068,1.068,0,1,1,1.068-1.068A1.068,1.068,0,0,1,13.865,11.987Zm-9.61,1.78,6.051-6.051h-.89a1.486,1.486,0,0,0-.911.378l-5.3,5.3a.535.535,0,0,0,0,.755l4.584,4.584a.535.535,0,0,0,.755,0l.334-.334L4.255,13.767Z"
          transform="translate(-3.053 -7.716)"
        />
      </svg>
    )}
  </Icon>
);
