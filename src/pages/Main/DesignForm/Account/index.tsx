import React from 'react';
import SidebarItem from '../../../../components/Sidebar/SidebarItem';
import {PhoneIcon} from '../../../../components/icons';

const accountItems = [
  {
    icon: <PhoneIcon size={12} />,
    name: 'First Name',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Last Name',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Last Name',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Email',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Title',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Address',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Person ID',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Password',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Position',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Account Type',
  },
  {
    icon: <PhoneIcon size={12} />,
    name: 'Attachment',
  },
];

const Account = () => {
  return (
    <div className="p-4 flex-grow bg-gray-light">
      {accountItems.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </div>
  )
};

export default Account;
