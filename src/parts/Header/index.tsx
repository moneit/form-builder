import React from 'react';
import {TCPIcon} from '../../components/icons';

export const Header = () => {
  return (
    <div className="flex p-3 border-b">
      <TCPIcon className="ml-3 mr-10" />
      <div className="border-l px-2 flex flex-grow justify-between items-center">
        <h2 className="text-xl font-bold mx-3">Form title Goes Here</h2>
        <div className="flex">
          <div className="mr-2">bell</div>
          <div>avatar</div>
        </div>
      </div>
    </div>
  )
};
