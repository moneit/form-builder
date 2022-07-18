import React from 'react';
import {
  FaChevronDown,
  FaEllipsisH,
  FaFont,
  FaHashtag,
  FaHouseUser,
  FaPhoneAlt,
  FaRegEnvelope,
} from 'react-icons/fa';
import { FieldName } from './definitions';
import SidebarItemComponent, { SidebarItem } from './SidebarItem';
import { Tab } from '@/components/DesignForm/CollapsableFields/definitions';
import { colors } from '@/constants';

const sidebarItems: SidebarItem[] = [
  {
    icon: <FaFont size={10} color={colors.iconGray} />,
    name: FieldName.FirstName,
  },
  {
    icon: <FaFont size={10} color={colors.iconGray} />,
    name: FieldName.LastName,
  },
  {
    icon: <FaPhoneAlt size={10} color={colors.iconGray} />,
    name: FieldName.PhoneNumber,
  },
  {
    icon: <FaRegEnvelope size={10} color={colors.iconGray} />,
    name: FieldName.Email,
  },
  {
    icon: <FaChevronDown size={10} color={colors.iconGray} />,
    name: FieldName.Title,
  },
  {
    icon: <FaHouseUser size={10} color={colors.iconGray} />,
    name: FieldName.Address,
  },
  {
    icon: <FaHashtag size={10} color={colors.iconGray} />,
    name: FieldName.PersonId,
  },
  {
    icon: <FaEllipsisH size={10} color={colors.iconGray} />,
    name: FieldName.Password,
  },
  {
    icon: <FaFont size={10} color={colors.iconGray} />,
    name: FieldName.Position,
  },
  {
    icon: <FaChevronDown size={10} color={colors.iconGray} />,
    name: FieldName.AccountType,
  },
  {
    icon: <FaFont size={10} color={colors.iconGray} />,
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
