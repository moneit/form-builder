import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Form } from './index';
import { Button, FormField as FormFieldComponent } from '@/components';
import { config } from '@/constants';

interface FormPanelProps {
  index: number;
  form: Form;
  onDrop: (item: any, index: number) => void;
  formIndex?: number;
}

interface FormField {
  name: string;
  label: string;
  value: string;
}

const FormPanel = ({ index, form, onDrop, formIndex }: FormPanelProps) => {
  const [formData, setFormData] = useState<any>({});

  const handleDrop = ({ field }: { field: FormField }) => {
    onDrop(field, index);
    setFormData({
      ...formData,
      [field.name]: field.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [config.field],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onFieldChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formDataKeys = Object.keys(formData);

  return (
    <div ref={drop} className="mt-3">
      {formIndex && (
        <p className="text-right text-gray-400 text-sm mb-2">{`Page ${formIndex}`}</p>
      )}
      <div className="bg-white p-3">
        {formDataKeys.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mb-3">
            {formDataKeys.map((key, i) => (
              <FormFieldComponent
                key={key}
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
  );
};

export default FormPanel;
