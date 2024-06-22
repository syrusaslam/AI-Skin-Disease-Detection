import React from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Info from './components/Info';
import './App.css';

function App() {
  const handleUpload = (file) => {
    console.log('File uploaded:', file);
    // Add logic to send file to the back-end API
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SSD AI</h1>
      </header>
      <div className="main-content">
        <Info />
        <div className="upload-container">
          <UploadForm onUpload={handleUpload} />
        </div>
      </div>
    </div>
  );
}

export default App;
