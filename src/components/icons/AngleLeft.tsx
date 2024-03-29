import React from 'react';
import { Icon } from './Icon';
import { IconProps } from './types';

export const AngleLeftIcon = (props: IconProps) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} viewBox="0 0 24 24">
        <path
          fill={color}
          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        />
      </svg>
    )}
  </Icon>
);
