import React, { useState } from 'react';
import './UploadForm.css';

const disease_list = [
  { id: 0, name: 'Eczema' },
  { id: 1, name: 'Warts Molluscum and other Viral Infections' },
  { id: 2, name: 'Melanoma' },
  { id: 3, name: 'Atopic Dermatitis' },
  { id: 4, name: 'Basal Cell Carcinoma (BCC)' },
  { id: 5, name: 'Melanocytic Nevi (NV)' },
  { id: 6, name: 'Benign Keratosis-like Lesions (BKL)' },
  { id: 7, name: 'Psoriasis pictures Lichen Planus and related diseases' },
  { id: 8, name: 'Seborrheic Keratoses and other Benign Tumors' },
  { id: 9, name: 'Tinea Ringworm Candidiasis and other Fungal Infections' }
];


function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [disease, setDisease] = useState('');

  const handleChange = (e) => {
    setError('');
    setDisease('');
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
        
        const diseaseInfo = disease_list.find(d => d.id === data.prediction);
        setDisease(diseaseInfo ? diseaseInfo.name : 'Unknown disease');
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
      {disease && <p className="disease">Predicted Disease: {disease}</p>}
    </>
  );
}

export default UploadForm;
