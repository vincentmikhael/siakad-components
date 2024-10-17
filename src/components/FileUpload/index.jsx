"use client";
import React, { useState } from 'react';
import { IconButton,Text } from '..';
import { FileJpg, UploadSimple } from '@phosphor-icons/react/dist/ssr';
import { Trash } from '@phosphor-icons/react';
import iconJpg from '../../../public/images/icon-jpg.png'
import Image from 'next/image';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length) {
      setFile(droppedFiles[0]);
    }
  };

  // Handle file drag over (to change style when file is dragged over)
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave (to reset style when file is no longer dragged over)
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle click on box to trigger file input
  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="w-full">
      <div
        className={`border p-8 rounded-[15px] text-center cursor-pointer ${
          dragging ? 'border-zinc-200' : 'border-zinc-200'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}  // Box klik membuka file input
      >
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          id="fileInput"
        />
        {file ? (
          <p className="text-gray-500 font-medium">
          <div className="flex justify-center mb-3">
          <IconButton size='md' ><UploadSimple weight='bold' color='black'/></IconButton> 
          </div>
          <Text size='sm' className={'inline-block mb-1 text-sky-600'}>Namafile.jpg <Text size='sm' className={'inline-block text-gray-400'}>Uploaded</Text> </Text> <br />
          <Text size='sm' className={'inline-block text-center'} color='gray-400'>SVG, PNG, JPG or GIF (max. 800x400px)</Text>
          
        </p>
        ) : (
          <p className="text-gray-500 font-medium">
            <div className="flex justify-center mb-3">
            <IconButton size='md' ><UploadSimple weight='bold' color='black'/></IconButton> 
            </div>
            <Text size='sm' className={'inline-block mb-1 text-sky-600'}>Click to upload <Text size='sm' className={'inline-block text-gray-400'}>or drag and drop</Text> </Text> <br />
            <Text size='sm' className={'inline-block text-center'} color='gray-400'>SVG, PNG, JPG or GIF (max. 800x400px)</Text>
            
          </p>
        )}
      </div>

      {file && (
        <div className="mt-4 border rounded-[15px] border-zinc-200 p-4 flex gap-4">
            <Image src={iconJpg} width={40}/>
            <div className='grow'>
            <Text size='sm'>{file.name}</Text>
            <Text size='xs' color='gray-500'>16 MB</Text>
            </div>
          <IconButton className={'border-none'} onClick={() => setFile(null)}><Trash color='gray' size={22} /></IconButton>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
