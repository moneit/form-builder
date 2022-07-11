import React, {ReactNode} from 'react';

interface INavItemProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

export const NavItem = ({
  icon,
  text,
  className = ''
}: INavItemProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {icon}
      <span className="text-white text-xs ml-4">{text}</span>
    </div>
  )
}
