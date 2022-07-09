import React, {FC} from 'react';
import classnames from 'classnames';

interface ITabHeaderProps {
  title: string;
  isActive: boolean;
  onTabHeaderItemClick: () => void;
  tabHeaderItemClass?: string;
}

const TabHeader: FC<ITabHeaderProps> = ({
  title,
  isActive,
  onTabHeaderItemClick,
  tabHeaderItemClass = 'px-4 py-2'
}) => {
  return(
    <div
      className={classnames(
        `text-sm mr-3 cursor-pointer ${tabHeaderItemClass}`,
        { 'border-b border-b-2 border-primary': isActive },
      )}
      onClick={onTabHeaderItemClick}
    >
      {title}
    </div>
  )
};

export default TabHeader;
