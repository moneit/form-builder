import React from 'react';
import { SidebarItem as SidebarItemComponent } from '@/components';
import {
  DropdownIcon,
  EmailIcon,
  PhoneIcon,
  TextIcon,
} from '@/components/icons';
import { SidebarItem } from '@/components/SidebarItem';
import { colors } from '@/constants';
import {
  // AccountFormFieldLabel as FieldLabel,
  AccountFormFieldName as FieldName,
} from '@/definitions';

// const nameToLableMap: {
//   [name in FieldName]: FieldLabel;
// } = {
//   [FieldName.FirstName]: FieldLabel.FirstName,
//   [FieldName.LastName]: FieldLabel.LastName,
//   [FieldName.PhoneNumber]: FieldLabel.PhoneNumber,
//   [FieldName.Email]: FieldLabel.Email,
//   [FieldName.Title]: FieldLabel.Title,
//   [FieldName.Address]: FieldLabel.Address,
//   [FieldName.PersonId]: FieldLabel.PersonId,
//   [FieldName.Password]: FieldLabel.Password,
//   [FieldName.Position]: FieldLabel.Position,
//   [FieldName.AccountType]: FieldLabel.AccountType,
//   [FieldName.Attachment]: FieldLabel.Attachment,
// };

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
        <SidebarItemComponent key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Account;
