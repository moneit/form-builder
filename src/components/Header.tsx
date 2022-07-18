import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { TCPIcon } from './icons';
import UserImage from '@/assets/images/user.png';

const Header = () => {
  return (
    <div className="flex p-3 border-b">
      <TCPIcon className="ml-3 mr-2" />
      <div className="border-l px-2 flex flex-grow justify-between items-center">
        <input className="outline-none" placeholder="Form title Goes Here" />
        <div className="flex items-center">
          <FaRegBell size={16} className="mr-3" />
          <img src={UserImage} className="w-10 h-10" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
