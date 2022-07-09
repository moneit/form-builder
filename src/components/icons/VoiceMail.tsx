import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const VoiceMailIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={15.926} baseHeight={7.167} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 15.926 7.167">
        <path
          fill={color}
          d="M12.342,9a3.583,3.583,0,0,0-2.98,5.574h-2.8a3.583,3.583,0,1,0-2.98,1.593h8.759a3.583,3.583,0,0,0,0-7.167ZM1.592,12.583a1.991,1.991,0,1,1,1.991,1.991A1.991,1.991,0,0,1,1.592,12.583Zm10.75,1.991a1.991,1.991,0,1,1,1.991-1.991A1.991,1.991,0,0,1,12.342,14.574Z"
          transform="translate(0 -9)"
        />
      </svg>
    )}
  </Icon>
);
