import React, {ReactNode, useState} from 'react';
import classnames from 'classnames';
import {TabHeader} from './TabHeader';

export interface ITabContent {
  title: string;
  component?: ReactNode
}

interface ITabProps {
  tabs: ITabContent[];
  tabHeaderItemClass?: string;
  tabHeaderContainerClass?: string;
}

export const Tab = ({
  tabs,
  tabHeaderItemClass ,
  tabHeaderContainerClass = ''
}: ITabProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <>
      <div className={classnames(`flex bg-white ${tabHeaderContainerClass}`)}>
        {tabs.map((tab, index) => (
          <TabHeader
            key={index}
            title={tab.title}
            isActive={index === activeIndex}
            onTabHeaderItemClick={() => setActiveIndex(index)}
            tabHeaderItemClass={tabHeaderItemClass}
          />
        ))}
      </div>
      {tabs[activeIndex]?.component}
    </>
  )
};
