import React, { ReactNode } from 'react';
import { IFormFieldProps, SidebarItem } from '@/components';
import { colors } from '@/constants';
import {
  DropdownIcon,
  EmailIcon,
  PhoneIcon,
  TextIcon
} from '@/components/icons';

interface IAccountItem {
  icon: ReactNode;
  name: string;
  field: IFormFieldProps
}

const accountItems: IAccountItem[] = [
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: 'First Name',
    field: {
      name: 'firstName',
      label: 'First Name',
      value: ''
    }
  },
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: 'Last Name',
    field: {
      name: 'lastName',
      label: 'Last Name',
      value: ''
    }
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: 'Phone Number',
    field: {
      name: 'phoneNumber',
      label: 'Phone Number',
      value: ''
    }
  },
  {
    icon: <EmailIcon size={10} color={colors.iconGray} />,
    name: 'Email',
    field: {
      name: 'email',
      label: 'Email',
      value: ''
    }
  },
  {
    icon: <DropdownIcon size={10} color={colors.iconGray} />,
    name: 'Title',
    field: {
      name: 'title',
      label: 'Title',
      value: ''
    }
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: 'Address',
    field: {
      name: 'address',
      label: 'Address',
      value: ''
    }
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: 'Person ID',
    field: {
      name: 'personID',
      label: 'Person ID',
      value: ''
    }
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: 'Password',
    field: {
      name: 'password',
      label: 'Password',
      value: ''
    }
  },
  {
    icon: <TextIcon size={10} color={colors.iconGray} />,
    name: 'Position',
    field: {
      name: 'position',
      label: 'Position',
      value: ''
    }
  },
  {
    icon: <DropdownIcon size={10} color={colors.iconGray} />,
    name: 'Account Type',
    field: {
      name: 'accountType',
      label: 'Account Type',
      value: ''
    }
  },
  {
    icon: <PhoneIcon size={10} color={colors.iconGray} />,
    name: 'Attachment',
    field: {
      name: 'attachment',
      label: 'Attachment',
      value: ''
    }
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
          field={item.field}
        />
      ))}
    </div>
  )
};

export default Account;
