import React from 'react';
import {
  ITabContent,
  AppLayout,
  Tab,
  Header,
  DataModel,
  FormSettings,
  DesignForm,
} from '@/components';

const tabs: ITabContent[] = [
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
