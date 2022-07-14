import React from 'react';
import {
  AppLayout,
  DataModel,
  DesignForm,
  FormSettings,
  Header,
  Tabs,
} from '@/components';
import { Tab } from '@/components/Tabs';

const tabs: Tab[] = [
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
    <AppLayout>
      <Header />
      <Tabs tabs={tabs} tabHeaderContainerClass="border-b" />
    </AppLayout>
  );
};

export default Main;
