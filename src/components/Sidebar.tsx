import React, {
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';
import classnames from 'classnames';
import { AngleLeftIcon, AngleRightIcon } from './icons';

interface ISidebarProps {
  title: string;
  children: ReactNode;
}

export const Sidebar = ({
  title,
  children
}: PropsWithChildren<ISidebarProps>) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={classnames(
      'h-5/6 flex flex-col transition-all duration-700 ml-2 border',
      collapsed ? 'w-[40px]' : 'w-[250px]',
    )}>
      <div className="bg-secondary p-2 flex justify-between">
        <span className="text-white">{!collapsed && title}</span>
        {collapsed ? (
          <AngleRightIcon
            color="white"
            className="cursor-pointer"
            onClick={toggleCollapsed}
          />
        ) : (
          <AngleLeftIcon
            color="white"
            className="cursor-pointer"
            onClick={toggleCollapsed}
          />
        )}
      </div>
      <div className="overflow-auto">
        {!collapsed && children}
      </div>
    </div>
  )
};
