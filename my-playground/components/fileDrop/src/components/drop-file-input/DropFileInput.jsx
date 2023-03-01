import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import './drop-file-input.css';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/cloud-upload-regular-240.png';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <div className='flex flex-col items-center p-4 bg-white rounded shadow-md shadow-black'>
      <h1 className="text-2xl">Drop Files Here</h1>
    <div className="w-11/12 h-1 my-2 mb-3 bg-gray-500 rounded-full opacity-50" />

        <>
            <div
                
                ref={wrapperRef}
                className="bg-black drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                >
                <div className="flex flex-col items-center drop-file-input__label">
                    {/* <img src={uploadImg} alt="" /> */}
                    <Image alt='' src={uploadImg} />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} className={`opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer hover:opacity-6`}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        {/* <p className="drop-file-preview__title">
                            Ready to upload
                        </p> */}
                        <div className='flex items-center justify-center w-full'>

                        <button 
                        //trigger call to upload file
                        onClick={()=>{}}
                        className='px-4 py-2 text-center text-white transition duration-150 ease-in-out rounded shadow-sm bg-sky-500 hover:opacity-90 active:opacity-80 shadow-gray-600 active:shadow-gray-500'>Ready to upload...</button>
                        </div>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <Image src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>X</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
</div>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
