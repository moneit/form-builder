import React from 'react';
import {Button} from '../../../../components';

const DragFields = () => {
  return (
    <div>
      <p className="text-right text-gray-300">Page 1</p>
      <div className="bg-white p-3">
        <div className="border border-dashed text-gray-300 text-sm h-16 flex items-center justify-center mb-4">
          Drag Fields Here
        </div>
        <div className="flex justify-end">
          <Button text="Continue" />
        </div>
      </div>
    </div>
  )
};

export default DragFields;
