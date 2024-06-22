import React, { useState } from 'react';
import './Info.css';

function Info() {
  const [activeIndex, setActiveIndex] = useState(null);

  const diseases = [
    { name: 'Eczema', description: 'Eczema is a condition that makes your skin red and itchy. It is common in children but can occur at any age. Eczema is long-lasting (chronic) and tends to flare periodically. It may be accompanied by asthma or hay fever.' },
    { name: 'Melanoma', description: 'Melanoma is a type of skin cancer that develops from the pigment-producing cells known as melanocytes. Melanomas typically occur in the skin, but may rarely occur in the mouth, intestines, or eye.' },
    { name: 'Atopic Dermatitis', description: 'Atopic dermatitis is an itchy inflammation of the skin, typically occurring in people with a family history of allergies. The main symptom is a rash that typically appears on the arms and behind the knees, but can also appear anywhere.' },
    { name: 'Basal Cell Carcinoma (BCC)', description: 'Basal cell carcinoma is a type of skin cancer that begins in the basal cells. Basal cells produce new skin cells as old ones die off. Limiting sun exposure can help prevent these cells from becoming cancerous.' },
    { name: 'Melanocytic Nevi (NV)', description: 'Melanocytic nevi, commonly known as moles, are growths on the skin that are usually brown or black. They can appear anywhere on the skin, alone or in groups.' },
    { name: 'Benign Keratosis-like Lesions (BKL)', description: 'Benign keratosis-like lesions are non-cancerous skin growths. They are usually dark, and may be raised or flat. These lesions are common and often increase with age.' },
    { name: 'Psoriasis, Lichen Planus, and related diseases', description: 'Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk, and scalp. Lichen planus is a condition that can cause swelling and irritation in the skin, hair, nails, and mucous membranes.' },
    { name: 'Seborrheic Keratoses and other Benign Tumors', description: 'Seborrheic keratoses are non-cancerous (benign) skin growths. They often appear as brown, black, or light tan growths on the face, chest, shoulders, or back.' },
    { name: 'Tinea Ringworm Candidiasis and other Fungal Infections', description: 'Tinea is a fungal infection of the skin, commonly called ringworm. It can affect the skin on your body, scalp, feet, or nails. Candidiasis is a fungal infection caused by a yeast (a type of fungus) called Candida.' },
    { name: 'Warts Molluscum and other Viral Infections', description: 'Warts are small growths on the skin caused by a viral infection, specifically by one of the many types of human papillomavirus (HPV). Molluscum contagiosum is a viral infection that results in small, benign raised lesions.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="info-container">
      <h2>Detectable Skin Diseases</h2>
      <ul>
        {diseases.map((disease, index) => (
          <li key={index} onClick={() => handleToggle(index)} className={activeIndex === index ? 'active' : ''}>
            {index + 1}. {disease.name}
            <div className="dropdown-content">{disease.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
