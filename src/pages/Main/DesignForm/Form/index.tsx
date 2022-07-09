import React, {useState} from 'react';
import FormField from "../../../../components/FormField";
import {Button} from "../../../../components";

const Form = () => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    companyName: '',
    accountType: ''
  });

  const onInputChange = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    });
  }

  return (
    <div className="bg-white p-5">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <FormField
          label="User ID"
          value="#9999999"
          disabled={true}
        />
        <FormField
          label="Email"
          value={form.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        <FormField
          label="First Name"
          value={form.firstName}
          onChange={(e) => onInputChange('firstName', e.target.value)}
        />
        <FormField
          label="Last Name"
          value={form.lastName}
          onChange={(e) => onInputChange('lastName', e.target.value)}
        />
        <FormField
          label="Email"
          value={form.email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        <FormField
          label="Password"
          value={form.password}
          onChange={(e) => onInputChange('password', e.target.value)}
        />
      </div>
      <FormField
        label="Company Name"
        value={form.companyName}
        onChange={(e) => onInputChange('companyName', e.target.value)}
      />
      <div className="grid grid-cols-2 gap-3 mb-3">
        <FormField
          label="Account Type"
          value={form.accountType}
          onChange={(e) => onInputChange('accountType', e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button text="Back" className="bg-gray-400 mr-3" />
        <Button text="Submit" />
      </div>
    </div>
  )
};

export default Form;
