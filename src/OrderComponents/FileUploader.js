import React, { useRef } from 'react';

const FileUploader = ({ files, setFiles }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="field">
      <label htmlFor="file-upload">Attach Files</label>
      <div
        className="file-drop-zone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        Drag and drop files here or click to select files
      </div>
      <input
        type="file"
        id="file-upload"
        ref={fileInputRef}
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.txt,.jpg,.png"
      />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} <button type="button" onClick={() => handleRemoveFile(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;
