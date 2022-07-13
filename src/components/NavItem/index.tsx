import React, {ReactNode} from 'react';

interface INavItemProps {
  icon: ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const NavItem = ({
  icon,
  text,
  className = '',
  onClick
}: INavItemProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-white text-xs ml-4">{text}</span>
    </div>
  )
};
