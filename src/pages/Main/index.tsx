import React from 'react';
import {AppLayout} from '../../layouts';
import {Header} from '../../parts';
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
    <AppLayout >
      <Header />
      <Tab
        tabs={tabs}
        tabHeaderContainerClass="border-b"
      />
    </AppLayout>
  )
};

export default Main;
