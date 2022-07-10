import React, {FC, ReactNode} from 'react';
import classnames from 'classnames';
import {AngleLeftIcon} from '../icons';

interface ISidebarProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Sidebar: FC<ISidebarProps> = ({
  title,
  visible,
  onClose,
  children
}) => {
  return (
    <div className={classnames(
      'h-full flex flex-col transition-all max-w-[300px] delay-300 duration-1000',
      {'-ml-[300px]': !visible },
    )}>
      <div className="bg-secondary p-2 flex justify-between">
        <span className="text-white">{title}</span>
        <AngleLeftIcon
          color="white"
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="overflow-auto">
        {children}
      </div>
    </div>
  )
};

export default Sidebar;
