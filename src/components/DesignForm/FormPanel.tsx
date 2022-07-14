import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Button, FormField } from '@/components';
import { IForm } from './index';
import { config } from '@/constants';

interface IFormPanelProps {
  index: number;
  form: IForm;
  onDrop: (item: any, index: number) => void;
  formIndex?: number;
}

const FormPanel = ({
  index,
  form,
  onDrop,
  formIndex
}: IFormPanelProps) => {
  const [formData, setFormData] = useState<any>({});

  const handleDrop = (item: any) => {
    onDrop(item.field, index);
    setFormData({
      ...formData,
      [item.field.name]: item.field.value
    });
  };

  const [{isOver, canDrop}, drop] = useDrop({
    accept: ([config.field]),
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onFieldChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div ref={drop} className="mt-3">
      {formIndex && (
        <p className="text-right text-gray-400 text-sm mb-2">{`Page ${formIndex}`}</p>
      )}
      <div className="bg-white p-3">
        {Object.keys(formData).length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mb-3">
            {Object.keys(formData).map((key, i) => (
              <FormField
                key={i}
                name={key}
                label={form.fields[i].label}
                value={formData[key]}
                onChange={(e) => onFieldChange(key, e.target.value)}
              />
            ))}
          </div>
        ) : (
          <div className="border border-dashed flex items-center justify-center">
            <p className="text-sm text-gray-300 py-6">Drag fields here</p>
          </div>
        )}
        <div className="flex justify-end mt-3">
          <Button color="primary">Continue</Button>
        </div>
      </div>
    </div>
  )
};

export default FormPanel;
