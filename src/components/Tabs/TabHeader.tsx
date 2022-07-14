import classnames from 'classnames';
import React from 'react';

interface TabHeaderProps {
  title: string;
  isActive: boolean;
  onTabHeaderItemClick: () => void;
  tabHeaderItemClass?: string;
}

const TabHeader = ({
  title,
  isActive,
  onTabHeaderItemClick,
  tabHeaderItemClass = 'px-4 py-2',
}: TabHeaderProps) => {
  return (
    <div
      className={classnames(
        `text-sm mr-3 cursor-pointer ${tabHeaderItemClass}`,
        { 'border-b border-b-2 border-primary': isActive }
      )}
      onClick={onTabHeaderItemClick}
      aria-hidden="true"
    >
      {title}
    </div>
  );
};

export default TabHeader;
