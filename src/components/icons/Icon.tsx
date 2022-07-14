import classnames from 'classnames';
import React, { ReactElement, useMemo } from 'react';
import { IconProps, color, iconDefaultColors } from './types';

export interface AbstractIconProps extends IconProps {
  baseWidth: number;
  baseHeight: number;
  color?: color[] | color;
  children(width: string, height: string, ...colors: string[]): ReactElement;
}

export const Icon = ({
  className = '',
  size,
  color = 'currentColor',
  baseWidth,
  baseHeight,
  children,
  ...props
}: AbstractIconProps) => {
  const width = useMemo(() => size || baseWidth, [size, baseWidth]);
  const height = useMemo(
    () => (width / baseWidth) * baseHeight,
    [width, baseWidth, baseHeight]
  );
  const colors = useMemo(
    () =>
      (Array.isArray(color) ? color : [color]).map(
        (col) => iconDefaultColors[col] ?? color
      ),
    [color]
  );

  return (
    <div className={classnames('inline-flex', className)} {...props}>
      {children(`${width / 16}rem`, `${height / 16}rem`, ...colors)}
    </div>
  );
};
