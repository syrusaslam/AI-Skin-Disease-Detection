import React from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Info from './components/Info';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Info />
        <div className="upload-container">
          <UploadForm />
        </div>
      </div>
    </div>
  );
}

export default App;
