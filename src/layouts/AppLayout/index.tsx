import React, {PropsWithChildren} from 'react';
import {AngleLeftIcon, HelpIcon, MessageIcon, SettingIcon, UserIcon} from '../../components/icons';
import {Footer} from '../../parts';
import {NavItem} from "../../components";

export const AppLayout = ({
   children
 }:PropsWithChildren) => {
  return (
    <div className="bg-gray flex flex-col">
      <div className="flex bg-secondary">
        <div className="w-[180px]">
          <div className="border-b border-white px-4">
            <div className="mt-[120px]">
              <NavItem icon={<UserIcon size={16} />} text="Users" className="mb-2" />
              <NavItem icon={<AngleLeftIcon size={16} color="white" />} text="Collapse" className="mb-2" />
            </div>
            <div className="mt-[250px]">
              <NavItem icon={<UserIcon size={16} />} text="Profile" className="mb-2" />
              <NavItem icon={<SettingIcon size={16} color="white" />} text="Settings" className="mb-2" />
            </div>
          </div>
          <div className="px-4 mt-4">
            <NavItem icon={<HelpIcon size={16} color="white" />} text="Profile" className="mb-2" />
            <NavItem icon={<MessageIcon size={16} color="white" />} text="Messages" className="mb-2" />
          </div>

        </div>
        <div className="flex flex-col bg-white flex-grow rounded-tl-large">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
};
