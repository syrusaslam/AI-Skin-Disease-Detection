import React, { useState } from 'react';
import './UploadForm.css';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        // Make a POST request to your Flask backend
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload file');
        }

        const data = await response.json();

        // Handle successful upload
        console.log('File uploaded successfully with prediction:', data.prediction);
      } catch (error) {
        console.error('Error uploading file:', error.message);
        setError('Failed to upload file');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="file" accept=".jpg,.jpeg" onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        {file && (
          <div className="image-preview">
            <img src={URL.createObjectURL(file)} alt="Preview" />
          </div>
        )}
        <button type="submit" disabled={!file}>Upload</button>
      </form>
    </>
  );
}

export default UploadForm;
