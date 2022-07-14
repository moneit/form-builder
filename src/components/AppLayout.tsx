import classnames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import { Footer, NavItem } from './index';
import {
  AngleLeftIcon,
  ArrowRightIcon,
  HelpIcon,
  MessageIcon,
  SettingIcon,
  UserIcon,
} from '@/components/icons';

const AppLayout = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bg-gray flex flex-col">
      <div className="flex bg-secondary">
        <div
          className={classnames(
            'bg-transparent transition-all duration-700 ease-in-out',
            collapsed ? 'w-[45px]' : 'w-[180px]'
          )}
        >
          <div className="border-b border-white px-4">
            <div className="mt-[120px]">
              <NavItem
                icon={<UserIcon size={16} />}
                text="Users"
                className="mb-4"
              />
              {collapsed && (
                <NavItem
                  icon={<ArrowRightIcon size={16} color="white" />}
                  text="Collapse"
                  onClick={toggleCollapse}
                />
              )}
              {!collapsed && (
                <NavItem
                  icon={<AngleLeftIcon size={16} color="white" />}
                  text="Collapse"
                  onClick={toggleCollapse}
                />
              )}
            </div>
            <div className="mt-[250px]">
              <NavItem
                icon={<UserIcon size={16} />}
                text="Profile"
                className="mb-4"
              />
              <NavItem
                icon={<SettingIcon size={16} color="white" />}
                text="Settings"
                className="mb-4"
              />
            </div>
          </div>
          <div className="px-4 mt-4">
            <NavItem
              icon={<HelpIcon size={16} color="white" />}
              text="Profile"
              className="mb-4"
            />
            <NavItem
              icon={<MessageIcon size={16} color="white" />}
              text="Messages"
              className="mb-4"
            />
          </div>
        </div>
        <div className="flex flex-col bg-white flex-grow rounded-tl-large">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
