import React from 'react';
import { FieldName } from './definitions';
import SidebarItemComponent, { SidebarItem } from './SidebarItem';
import { Tab } from '@/components/DesignForm/CollapsableFields/definitions';
import {
  DropdownIcon,
  EmailIcon,
  PhoneIcon,
  TextIcon,
} from '@/components/icons';
import { colors } from '@/constants';

const sidebarItems: SidebarItem[] = [
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: FieldName.FirstName,
  },
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: FieldName.LastName,
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: FieldName.PhoneNumber,
  },
  {
    icon: <EmailIcon size={10} color={colors.iconGray} />,
    name: FieldName.Email,
  },
  {
    icon: <DropdownIcon size={10} color={colors.iconGray} />,
    name: FieldName.Title,
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: FieldName.Address,
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: FieldName.PersonId,
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: FieldName.Password,
  },
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: FieldName.Position,
  },
  {
    icon: <DropdownIcon size={10} color={colors.iconGray} />,
    name: FieldName.AccountType,
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: FieldName.Attachment,
  },
];

const Account = () => {
  return (
    <div className="p-4 flex-grow bg-gray-light">
      {sidebarItems.map((item) => (
        <SidebarItemComponent key={item.name} item={item} tab={Tab.Account} />
      ))}
    </div>
  );
};

export default Account;
