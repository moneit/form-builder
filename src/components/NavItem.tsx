import classnames from 'classnames';
import React, { ReactNode } from 'react';

interface NavItemProps {
  icon: ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
}

const NavItem = ({ icon, text, className = '', onClick }: NavItemProps) => {
  return (
    <div
      className={classnames('flex items-center cursor-pointer', className)}
      onClick={onClick}
      aria-hidden="true"
    >
      {icon}
      <span className="text-white text-xs ml-4">{text}</span>
    </div>
  );
};

export default NavItem;
