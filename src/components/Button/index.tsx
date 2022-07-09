import React, {FC} from 'react';
import classnames from 'classnames';

interface IButtonProps {
  text: string;
  className?: string;
}

const Button: FC<IButtonProps> = ({
  text,
  className = 'bg-primary',
}) => {
  return (
    <button className={classnames(
      `text-white text-sm rounded w-30 h-8 outline-none ${className}`
    )}>{text}</button>
  )
};

export default Button;
