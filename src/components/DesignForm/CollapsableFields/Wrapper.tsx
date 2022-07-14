import classnames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import { AngleLeftIcon, AngleRightIcon } from '@/components/icons';

const Wrapper = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classnames(
        'h-5/6 flex flex-col transition-all duration-700 ml-2 border',
        collapsed ? 'w-[40px]' : 'w-[250px]'
      )}
    >
      <div className="bg-secondary p-2 flex justify-between">
        <span className="text-white">{!collapsed && 'Available Fields'}</span>
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
      <div className="overflow-auto">{!collapsed && children}</div>
    </div>
  );
};

export default Wrapper;
