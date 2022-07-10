import React from 'react';
import {Tab} from '../../components';

import DesignForm from './DesignForm';
import FormSettings from './FormSettings';
import DataModel from './DataModel';

const tabs = [
  {
    title: 'Design Form',
    component: <DesignForm />,
  },
  {
    title: 'Form Settings',
    component: <FormSettings />,
  },
  {
    title: 'Data Model',
    component: <DataModel />,
  },
];

const Main = () => {
  return (
    <div className="bg-gray w-screen h-screen flex flex-col">
      <Tab
        tabs={tabs}
        tabHeaderContainerClass="border-b"
      />
    </div>
  )
};

export default Main;
