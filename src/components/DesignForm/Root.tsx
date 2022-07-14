import React, { useState } from 'react';
import FormPanel from './FormPanel';
import { Button, CollapsableFields } from '@/components';
import { FormFieldProps } from '@/components/FormField';

export interface Form {
  fields: FormFieldProps[];
}

const emptyForm: Form = {
  fields: [],
};

const DesignForm = () => {
  const [forms, setForms] = useState<Form[]>([emptyForm]);

  const addNewForm = () => {
    setForms([...forms, emptyForm]);
  };

  const handleDrop = (field: any, index: number) => {
    const updateFields = (form: Form, field: any) => ({
      ...form,
      fields: form.fields.includes(field)
        ? form.fields
        : [...form.fields, field],
    });

    setForms(
      forms.map((form, i) => (i !== index ? form : updateFields(form, field)))
    );
  };

  return (
    <div className="pt-3 flex-grow flex bg-gray">
      <CollapsableFields></CollapsableFields>
      <div className="mx-3 w-full pb-3">
        {forms.slice(1, forms.length).map((form, index) => (
          <FormPanel
            key={index + 1}
            index={index + 1}
            onDrop={handleDrop}
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
        <FormPanel index={0} onDrop={handleDrop} form={forms[0]} />
      </div>
    </div>
  );
};

export default DesignForm;
