import React from 'react';
import Account from './Account';
import { Tab } from './definitions';
import Wrapper from './Wrapper';
import { Tabs } from '@/components';
import { Tab as TabInterface } from '@/components/Tabs';

const tabs: TabInterface[] = [
  {
    title: Tab.Account,
    component: <Account />,
  },
  {
    title: Tab.Company,
  },
  {
    title: Tab.Deal,
  },
  {
    title: Tab.Other,
  },
];

const CollapsableFields = () => (
  <Wrapper>
    <Tabs tabs={tabs} tabHeaderItemClass="p-2 text-xs" />
  </Wrapper>
);

export default CollapsableFields;
