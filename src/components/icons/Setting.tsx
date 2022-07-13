import React from 'react';
import {IIconProps} from './types';
import {Icon} from './Icon';

export const SettingIcon = (props: IIconProps) => (
  <Icon baseWidth={29.522} baseHeight={29.522} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 29.522 29.522">
        <g>
          <path
            fill={color}
            d="M15.991,29.522h-2.46a1.847,1.847,0,0,1-1.845-1.845v-2.29a10.98,10.98,0,0,1-2.264-.939L7.8,26.068a1.89,1.89,0,0,1-2.61,0l-1.74-1.739a1.844,1.844,0,0,1,0-2.609L5.073,20.1a10.91,10.91,0,0,1-.938-2.263H1.845A1.847,1.847,0,0,1,0,15.99V13.53a1.845,1.845,0,0,1,1.845-1.845h2.29a10.981,10.981,0,0,1,.939-2.263L3.454,7.8a1.846,1.846,0,0,1,0-2.609l1.739-1.74a1.89,1.89,0,0,1,2.61,0L9.424,5.073a10.974,10.974,0,0,1,2.262-.938V1.845A1.847,1.847,0,0,1,13.531,0h2.46a1.847,1.847,0,0,1,1.845,1.845v2.29a10.986,10.986,0,0,1,2.262.938l1.621-1.621a1.89,1.89,0,0,1,2.61,0l1.74,1.739a1.844,1.844,0,0,1,0,2.609l-1.62,1.621a10.925,10.925,0,0,1,.939,2.263h2.29a1.847,1.847,0,0,1,1.845,1.845v2.46a1.845,1.845,0,0,1-1.845,1.845h-2.29a10.978,10.978,0,0,1-.939,2.263l1.62,1.621a1.846,1.846,0,0,1,0,2.609l-1.739,1.74a1.89,1.89,0,0,1-2.61,0L20.1,24.448a10.982,10.982,0,0,1-2.263.939v2.29A1.848,1.848,0,0,1,15.991,29.522ZM9.322,23.063a.616.616,0,0,1,.32.09,9.765,9.765,0,0,0,2.8,1.163.615.615,0,0,1,.471.6v2.763a.616.616,0,0,0,.615.615h2.46a.616.616,0,0,0,.615-.615V24.913a.615.615,0,0,1,.47-.6,9.764,9.764,0,0,0,2.8-1.162.616.616,0,0,1,.756.09L22.589,25.2a.634.634,0,0,0,.87,0l1.739-1.74a.615.615,0,0,0,0-.87l-1.955-1.955a.615.615,0,0,1-.09-.756,9.754,9.754,0,0,0,1.162-2.8.615.615,0,0,1,.6-.471h2.763a.612.612,0,0,0,.435-.18.606.606,0,0,0,.18-.434V13.53a.616.616,0,0,0-.615-.615H24.913a.614.614,0,0,1-.6-.471,9.748,9.748,0,0,0-1.162-2.8.615.615,0,0,1,.09-.756L25.2,6.931a.615.615,0,0,0,0-.87l-1.74-1.739a.631.631,0,0,0-.87,0L20.633,6.277a.612.612,0,0,1-.756.09,9.757,9.757,0,0,0-2.8-1.162.613.613,0,0,1-.47-.6V1.845a.616.616,0,0,0-.615-.615h-2.46a.616.616,0,0,0-.615.615V4.608a.615.615,0,0,1-.471.6,9.763,9.763,0,0,0-2.8,1.162.614.614,0,0,1-.755-.09L6.933,4.323a.631.631,0,0,0-.87,0L4.324,6.062a.615.615,0,0,0,0,.87L6.279,8.887a.615.615,0,0,1,.09.756,9.752,9.752,0,0,0-1.162,2.8.615.615,0,0,1-.6.471H1.845a.614.614,0,0,0-.615.614v2.46a.616.616,0,0,0,.615.615H4.608a.614.614,0,0,1,.6.471,9.758,9.758,0,0,0,1.162,2.8.615.615,0,0,1-.09.756L4.323,22.59a.615.615,0,0,0,0,.87L6.063,25.2a.631.631,0,0,0,.87,0l1.955-1.955A.609.609,0,0,1,9.322,23.063Z"
          />
        </g>
        <g transform="translate(8.61 8.61)">
          <path
            fill={color}
            d="M20.15,26.3a6.15,6.15,0,1,1,6.15-6.15A6.157,6.157,0,0,1,20.15,26.3Zm0-11.071a4.92,4.92,0,1,0,4.92,4.92A4.926,4.926,0,0,0,20.15,15.23Z"
            transform="translate(-14 -14)"
          />
        </g>
      </svg>
    )}
  </Icon>
);
