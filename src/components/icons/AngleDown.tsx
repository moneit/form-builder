import React from 'react';
import { Icon } from './Icon';
import { IconProps } from './types';

export const AngleDownIcon = (props: IconProps) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        />
      </svg>
    )}
  </Icon>
);
