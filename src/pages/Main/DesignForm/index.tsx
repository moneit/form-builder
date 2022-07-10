import React, {useState} from 'react';
import {Sidebar, Tab} from '../../../components';
import Account from './Account';
import DragFields from './DragFields';
import Form from './Form';

const sidebarTags = [
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
]

const DesignForm = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  return (
    <div className="pt-3 flex-grow flex h-0">
      <Sidebar
        title="Available Fields"
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      >
        <Tab
          tabs={sidebarTags}
          tabHeaderItemClass="p-2 text-xs"
        />
      </Sidebar>
      <div className="ml-3 w-[850px]">
        <DragFields />

        <div className="my-4 flex items-center">
          <div className="border-b border-dashed w-[30%] h-1" />
          <div className="mx-3 text-gray-400">+ Add New Page Here</div>
          <div className="border-b border-dashed w-[30%] h-1" />
          <p className="ml-auto text-sm text-gray-400">Page 2</p>
        </div>

        <Form />
      </div>
    </div>
  )
};

export default DesignForm;
