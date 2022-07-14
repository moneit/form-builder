import React, { ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import { FieldName } from './definitions';
import { Tab } from '@/components/DesignForm/CollapsableFields/definitions';
import { DndItem, dndType as type } from '@/components/DesignForm/definitions';

export interface SidebarItem {
  icon: ReactNode;
  name: FieldName;
}

interface SidebarItemProps {
  item: SidebarItem;
  tab: Tab;
}

const SidebarItemComponent = ({
  item: { icon, name },
  tab,
}: SidebarItemProps) => {
  const [{ cursor }, drag] = useDrag<DndItem, any, { cursor: string }>({
    type,
    item: {
      name,
      tab,
    },
    collect: (monitor) => ({
      cursor: monitor.isDragging() ? 'copy' : 'move',
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="flex items-center bg-primary-light mb-3 rounded p-2"
      style={{ cursor }}
    >
      {icon}
      <span className="ml-3 text-xs text-secondary">{name}</span>
    </div>
  );
};

export default SidebarItemComponent;
