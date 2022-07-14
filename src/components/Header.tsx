import React from 'react';
import { MessageIcon, TCPIcon } from './icons';
import UserImage from '@/assets/images/user.png';

export const Header = () => {
  return (
    <div className="flex p-3 border-b">
      <TCPIcon className="ml-3 mr-10" />
      <div className="border-l px-2 flex flex-grow justify-between items-center">
        <h2 className="text-xl font-bold mx-3">Form title Goes Here</h2>
        <div className="flex items-center">
          <MessageIcon size={16} className="mr-3" />
          <img
            src={UserImage}
            className="w-10 h-10"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  )
};
