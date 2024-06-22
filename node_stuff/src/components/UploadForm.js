import React, { useState } from 'react';
import './UploadForm.css';

function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = ['image/jpeg', 'image/jpg'];

    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please upload a JPG file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" accept=".jpg,.jpeg" onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={!file}>Upload</button>
      </form>
        {file && (
          <div className="image-preview">
            <img src={URL.createObjectURL(file)} alt="Preview" />
          </div>
        )}
    </>
  );
}

export default UploadForm;
