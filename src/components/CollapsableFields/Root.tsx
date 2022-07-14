import React from 'react';
import Account from './Account';
import Wrapper from './Wrapper';
import { Tabs } from '@/components';
import { Tab } from '@/components/Tabs';

const tabs: Tab[] = [
  {
    title: 'Account',
    component: <Account />,
  },
  {
    title: 'Company',
  },
  {
    title: 'Deal',
  },
  {
    title: 'Other',
  },
];

const CollapsableFields = () => (
  <Wrapper>
    <Tabs tabs={tabs} tabHeaderItemClass="p-2 text-xs" />
  </Wrapper>
);

export default CollapsableFields;
