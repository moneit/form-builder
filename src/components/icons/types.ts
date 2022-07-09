import {ReactEventHandler} from "react";

export interface IIconProps {
  className?: string;
  size?: number;
  color?: Color | Color[];
  onClick?: ReactEventHandler;
}

export type Color = 'white' | 'black' | 'text' | 'primary' | 'info' | 'success' | 'danger' | 'blue' | 'blue-light' | 'blue-dark';

export const ICON_DEFAULT_COLORS = {
  white: '#FFF',
  black: '#000',
  text: '#424242',
  primary: '#F6A734',
  info: '#2FB4DD',
  success: '#A3CE5E',
  danger: '#D23629',
  blue: '#307CD8',
  'blue-light': '#2680EB',
  'blue-dark': '#0B1C34',
};
