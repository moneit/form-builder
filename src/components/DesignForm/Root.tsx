import React, { useState } from 'react';
import {
  IFormFieldProps,
  ITabContent,
  Button,
  Sidebar,
  Tab
} from '@/components';

import Account from './Account';
import FormPanel from './FormPanel';

export interface IForm {
  fields: IFormFieldProps[];
}

const sidebarTags: ITabContent[] = [
  {
    title: 'Account',
    component: <Account />
  },
  {
    title: 'Company'
  },
  {
    title: 'Deal'
  },
  {
    title: 'Other'
  },
];

const emptyForm: IForm = {
  fields: [],
};

export const DesignForm = () => {
  const [forms, setForms] = useState<IForm[]>([emptyForm]);

  const addNewForm = () => {
    setForms([
      ...forms,
      emptyForm
    ]);
  };

  const onDropField = (item: any, index: number) => {
    setForms(forms.map((form, i) =>
      i !== index
        ? form
        : {
          ...form,
          fields: [...form.fields, item]
        }
    ));
  };

  return (
    <div className="pt-3 flex-grow flex bg-gray">
      <Sidebar title="Available Fields">
        <Tab
          tabs={sidebarTags}
          tabHeaderItemClass="p-2 text-xs"
        />
      </Sidebar>
      <div className="mx-3 w-full pb-3">
        {forms.slice(1, forms.length).map((form, index) => (
          <FormPanel
            key={index + 1}
            index={index + 1}
            onDrop={onDropField}
            form={form}
            formIndex={index + 1}
          />
        ))}
        <div className="my-4 flex items-center">
          <div className="border-b border-dashed w-[30%] h-1" />
          <Button
            className="text-primary"
            onClick={addNewForm}
          >
            + Add New Page Here
          </Button>
          <div className="border-b border-dashed w-[30%] h-1" />
          <p className="ml-auto text-sm text-gray-400">Page {forms.length}</p>
        </div>
        <FormPanel
          index={0}
          onDrop={onDropField}
          form={forms[0]}
        />
      </div>
    </div>
  )
};
