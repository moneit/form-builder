import classnames from 'classnames';
import React, { ReactNode, useState } from 'react';
import TabHeader from './TabHeader';

export interface Tab {
  title: string;
  component?: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  tabHeaderItemClass?: string;
  tabHeaderContainerClass?: string;
}

const Tabs = ({
  tabs,
  tabHeaderItemClass,
  tabHeaderContainerClass = '',
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={classnames(`flex bg-white ${tabHeaderContainerClass}`)}>
        {tabs.map((tab, index) => (
          <TabHeader
            key={tab.title}
            title={tab.title}
            isActive={index === activeIndex}
            onTabHeaderItemClick={() => setActiveIndex(index)}
            tabHeaderItemClass={tabHeaderItemClass}
          />
        ))}
      </div>
      {tabs[activeIndex]?.component}
    </>
  );
};

export default Tabs;
