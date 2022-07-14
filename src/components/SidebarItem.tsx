import React, { ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import { config } from '@/constants';
import { AccountFormFieldName } from '@/definitions';

// extendable
type FieldName = AccountFormFieldName;

export interface SidebarItem {
  icon: ReactNode;
  name: FieldName;
}

export interface SidebarItemProps {
  item: SidebarItem;
}

const SidebarItemComponent = ({ item: { icon, name } }: SidebarItemProps) => {
  const [{ cursor }, drag] = useDrag({
    type: config.field,
    item: {
      name,
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
