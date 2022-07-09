import React, {FC} from "react";
import {IIconProps} from "./types";
import {Icon} from "./Icon";

export const PhoneRingIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36.277} baseHeight={28.508} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 36.277 28.508">
        <path
          fill={color}
          d="M35.838,25.175a25.72,25.72,0,0,0-35.4,0,1.533,1.533,0,0,0,0,2.146L4.187,31.07a1.507,1.507,0,0,0,1.073.438,1.551,1.551,0,0,0,1.058-.423,17.26,17.26,0,0,1,4.021-2.8,1.506,1.506,0,0,0,.846-1.36V22.242a22.1,22.1,0,0,1,6.953-1.1,22.538,22.538,0,0,1,6.953,1.088v4.686a1.523,1.523,0,0,0,.846,1.36,17.4,17.4,0,0,1,4.021,2.8,1.484,1.484,0,0,0,1.058.423,1.507,1.507,0,0,0,1.073-.438l3.749-3.749a1.514,1.514,0,0,0,0-2.131ZM31.984,9.439,29.853,7.308l-5.381,5.366L26.6,14.805S31.818,9.485,31.984,9.439ZM19.65,3H16.627v7.558H19.65ZM9.674,14.805l2.131-2.131L6.439,7.293,4.293,9.439C4.459,9.485,9.674,14.805,9.674,14.805Z"
          transform="translate(0 -3)"
        />
      </svg>
    )}
  </Icon>
);
