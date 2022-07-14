import React from 'react';
import { useDrag } from 'react-dnd';
import { config } from '@/constants';
import { IFormFieldProps } from './FormField';

export interface ISidebarItemProps {
  icon: any;
  name: string;
  field: IFormFieldProps
}

export const SidebarItem = ({
  icon,
  name,
  field,
}: ISidebarItemProps) => {
  const [{cursor}, drag] = useDrag({
    item: {
      type: config.field,
      field
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
      style={{cursor}}
    >
      {icon}
      <span className="ml-3 text-xs text-secondary">
        {name}
      </span>
    </div>
  )
};
