import React from 'react';

interface ISidebarItemProps {
  icon: any;
  name: string;
}

const SidebarItem = ({icon, name}: ISidebarItemProps) => {
  return (
    <div className="flex items-center bg-primary-light mb-3 rounded p-2">
      {icon}
      <span className="ml-3 text-xs text-secondary">{name}</span>
    </div>
  )
};

export default SidebarItem;
