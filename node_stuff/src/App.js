import React, { useState } from 'react';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import Info from './components/Info';
import DisclaimerModal from './components/DisclaimerModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Info />
        <div className="upload-container">
          <UploadForm />
        </div>
      </div>
      <button className="disclaimer-button" onClick={toggleModal}>Disclaimer</button>
      {isModalOpen && <DisclaimerModal onClose={toggleModal} />}
    </div>
  );
}

export default App;
