import React from 'react';
import Dropzone from 'react-dropzone'
import {Button} from '../../../../components';

const DragFields = () => {
  return (
    <div>
      <p className="text-right text-gray-300">Page 1</p>
      <div className="bg-white p-3">
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
            <section className="border border-dashed h-16 mb-4">
              <div {...getRootProps()} className="w-full h-full">
                <input {...getInputProps()} />
                <p className="w-full h-full text-gray-300 text-sm flex items-center justify-center">
                  Drag Fields Here
                </p>
              </div>
            </section>
          )}
        </Dropzone>
        <div className="flex justify-end">
          <Button color="primary">Continue</Button>
        </div>
      </div>
    </div>
  )
};

export default DragFields;
