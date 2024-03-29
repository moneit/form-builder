import React from 'react';
import { Icon } from './Icon';
import { IconProps } from './types';

export const AngleRightIcon = (props: IconProps) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        />
      </svg>
    )}
  </Icon>
);
