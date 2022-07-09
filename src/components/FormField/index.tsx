import React, {FC} from 'react';
import {EditIcon, InfoCircleIcon} from "../icons";

interface IFormField {
  label: string;
  value: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const FormField: FC<IFormField> = ({
  label,
  value,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="border border-dashed border-transparent hover:border-primary px-3 py-2 rounded">
      <div className="flex justify-between mb-1">
        <label className="text-xs">{label}</label>
        <div>
          <EditIcon size={14} className="mr-3" />
          <InfoCircleIcon size={14} />
        </div>
      </div>
      {disabled ? (
        <div className="text-md">{value}</div>
      ): (
        <input
          type="text"
          className="w-full text-sm bg-primary-lighter text-md px-2 py-1 border focus:outline-none rounded"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  )
};

export default FormField;
