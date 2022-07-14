import React, { useState } from 'react';
import CollapsableFields from './CollapsableFields';
import FormPanel, { ChangedField, DroppedField } from './FormPanel';
import { Button } from '@/components';
import { FormField } from '@/components/FormField';

export interface Form {
  fields: FormField[];
}

const emptyForm: Form = {
  fields: [],
};

const DesignForm = () => {
  const [forms, setForms] = useState<Form[]>([emptyForm]);

  const addNewForm = () => {
    setForms([...forms, emptyForm]);
  };

  const handleDrop = (field: DroppedField, formIndex: number) => {
    setForms(
      forms.map((form, index) => {
        const fieldNames = form.fields.map((field) => field.name);

        const updateFields = () => {
          return {
            fields: fieldNames.includes(field.name)
              ? form.fields
              : [...form.fields, { ...field, value: '' }],
          };
        };

        return index !== formIndex ? form : updateFields();
      })
    );
  };

  const handleChange = (field: ChangedField, formIndex: number) => {
    setForms(
      forms.map((form, index) => {
        const fieldNames = form.fields.map((field) => field.name);

        const updateValue = () => {
          if (!fieldNames.includes(field.name)) return form;

          return {
            fields: form.fields.map((oldField) => {
              if (oldField.name !== field.name) return oldField;

              return {
                ...oldField,
                value: field.value,
              };
            }),
          };
        };

        return index !== formIndex ? form : updateValue();
      })
    );
  };

  return (
    <div className="pt-3 flex-grow flex bg-gray">
      <CollapsableFields />
      <div className="mx-3 w-full pb-3">
        {forms.slice(1, forms.length).map((form, index) => (
          <FormPanel
            key={index + 1}
            onDrop={handleDrop}
            onChange={handleChange}
            form={form}
            formIndex={index + 1}
          />
        ))}
        <div className="my-4 flex items-center">
          <div className="border-b border-dashed w-[30%] h-1" />
          <Button className="text-primary" onClick={addNewForm}>
            + Add New Page Here
          </Button>
          <div className="border-b border-dashed w-[30%] h-1" />
          <p className="ml-auto text-sm text-gray-400">Page {forms.length}</p>
        </div>
        <FormPanel
          formIndex={0}
          onDrop={handleDrop}
          onChange={handleChange}
          form={forms[0]}
        />
      </div>
    </div>
  );
};

export default DesignForm;
