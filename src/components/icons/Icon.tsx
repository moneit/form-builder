import React, { FC, ReactElement, useMemo } from "react";
import { Color, ICON_DEFAULT_COLORS, IIconProps } from "./types";
import classnames from "classnames";

export interface IAbstractIconProps extends IIconProps {
  baseWidth: number;
  baseHeight: number;
  color?: Color[] | Color;
  children(width: string, height: string, ...colors: string[]): ReactElement;
}

export const Icon: FC<IAbstractIconProps> = ({
  className = '',
  size,
  color = 'currentColor',
  baseWidth,
  baseHeight,
  children,
  ...props
}) => {
  const width = useMemo(() => size || baseWidth, [size, baseWidth]);
  const height = useMemo(() => width / baseWidth * baseHeight, [width, baseWidth, baseHeight]);
  const colors = useMemo(() => (
    (Array.isArray(color) ? color : [color]).map((col) => ICON_DEFAULT_COLORS[col] ?? color)
  ), [color]);

  return (
    <div className={classnames('inline-flex', className)} {...props}>
      {children(`${width / 16}rem`, `${height / 16}rem`, ...colors)}
    </div>
  );
}
