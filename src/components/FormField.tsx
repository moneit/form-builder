import classnames from 'classnames';
import React from 'react';
import { Dropdown } from '@/components';
import { EditIcon, EyeIcon, MoreVertIcon } from '@/components/icons';

type type = 'input' | 'select';

export interface FormFieldProps {
  name: string;
  label: string;
  type?: type;
  value: string;
  disabled?: boolean;
  activated?: boolean;
  onChange?: (e: any) => void;
}

const FormField = ({
  name,
  label,
  type = 'input',
  value,
  disabled = false,
  activated = true,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="border border-dashed border-transparent hover:border-primary px-3 py-2 rounded">
      <div className="flex justify-between mb-1">
        <label
          className={classnames('text-xs font-medium', {
            'text-gray-400': !activated,
          })}
        >
          {label}
        </label>
        <div className="flex items-center">
          {!activated && <EyeIcon size={14} className="mr-2" color="#757575" />}
          <EditIcon size={14} className="mr-2" />
          <Dropdown
            text={<MoreVertIcon size={3} />}
            arrow={null}
            buttonProps={{
              className: 'bg-white rounded-full !px-2 focus:bg-primary-lighter',
            }}
            dropdown={[
              { text: 'Edit Field' },
              { text: 'Duplicate Field' },
              { text: 'Delete Field' },
            ]}
            dropdownClass="w-36"
            dropdownItemClass="text-xs px-6 font-medium hover:text-danger"
            xPosition="right"
            yPosition="top"
            onSelect={(item: any) => console.log('item =>', item)}
          />
        </div>
      </div>
      {disabled ? (
        <div className="text-md">{value}</div>
      ) : (
        <>
          {type === 'input' && (
            <input
              name={name}
              type="text"
              className={classnames(
                'w-full text-sm bg-primary-lighter text-md px-2 py-1 border focus:outline-none rounded',
                { 'bg-gray-100': !activated }
              )}
              disabled={!activated}
              value={value}
              onChange={onChange}
            />
          )}
          {type === 'select' && (
            <select
              value={value}
              name={name}
              onChange={onChange}
              className={classnames(
                'w-full text-sm bg-primary-lighter text-md px-2 py-1 border focus:outline-none rounded',
                { 'bg-gray-100': !activated }
              )}
            >
              <option value="option1">Option</option>
            </select>
          )}
        </>
      )}
    </div>
  );
};

export default FormField;
