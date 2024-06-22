import React from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
  const handleUpload = (file) => {
    console.log('File uploaded:', file);
    // Add logic to send file to the back-end API
  };

  return (
    <div className="App">
      <Header />
      <UploadForm onUpload={handleUpload} />
    </div>
  );
}

export default App;

