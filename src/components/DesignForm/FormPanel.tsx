import React from 'react';
import { useDrop } from 'react-dnd';
import { Form } from '.';
import { nameToLableMap } from './CollapsableFields/Account/definitions';
import { Tab } from './CollapsableFields/definitions';
import { DndItem, FieldLabel, FieldName, dndType } from './definitions';
import { Button, FormField as FormFieldComponent } from '@/components';

export interface DroppedField {
  name: FieldName;
  label: FieldLabel;
}

export interface ChangedField {
  name: FieldName;
  value: any;
}

interface FormPanelProps {
  form: Form;
  onDrop: (item: DroppedField, index: number) => void;
  onChange: (field: ChangedField, index: number) => void;
  formIndex: number;
}

const FormPanel = ({ form, onDrop, onChange, formIndex }: FormPanelProps) => {
  const handleDrop = ({ tab, name }: DndItem) => {
    if (tab === Tab.Account) {
      const label = nameToLableMap[name];
      onDrop(
        {
          name,
          label,
        },
        formIndex
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [dndType],
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const onFieldChange = (name: FieldName, value: string) => {
    onChange(
      {
        name,
        value,
      },
      formIndex
    );
  };

  return (
    <div ref={drop} className="mt-3">
      {!!formIndex && (
        <p className="text-right text-gray-400 text-sm mb-2">{`Page ${formIndex}`}</p>
      )}
      <div className="bg-white p-3">
        {form.fields.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mb-3">
            {form.fields.map(({ name, label, value }) => (
              <FormFieldComponent
                key={name}
                name={name}
                label={label}
                value={value}
                onChange={(e) => onFieldChange(name, e.target.value)}
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
