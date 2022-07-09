import React, {FC, ReactNode, useState} from 'react';
import classnames from 'classnames';

import TabHeader from './TabHeader';

interface ITabContent {
  title: string;
  component?: ReactNode
}

interface ITabProps {
  tabs: ITabContent[];
  tabHeaderItemClass?: string;
  tabHeaderContainerClass?: string;
}

const Tab: FC<ITabProps> = ({
  tabs,
  tabHeaderItemClass ,
  tabHeaderContainerClass = ''
}) => {
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

export default Tab;
