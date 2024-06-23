import React, { useState } from 'react';
import './Info.css';

function Info() {
  const [activeIndex, setActiveIndex] = useState(null);

  const diseases = [
    { name: 'Melanoma', description: 'Melanoma is a serious form of skin cancer that develops in the melanocytes, the cells responsible for producing melanin, the pigment that gives skin its color. It is characterized by the uncontrolled growth of these pigment-producing cells and often appears as a new or changing mole or dark spot on the skin. Early detection and treatment are crucial, as melanoma can spread to other parts of the body if not treated promptly. Factors such as excessive sun exposure and genetic predisposition increase the risk of developing melanoma.' },
    { name: 'Melanocytic nevus', description: 'A melanocytic nevus, commonly known as a mole, is a benign growth on the skin that arises from melanocytes, the cells responsible for producing pigment. These moles can appear anywhere on the body, are usually brown or black, and can vary in size and shape. While typically harmless, changes in color, size, or shape of a melanocytic nevus can sometimes indicate malignant transformation, such as melanoma, and should be evaluated by a healthcare professional.' },
    { name: 'Basal cell carcinoma', description: 'Basal cell carcinoma (BCC) is the most common type of skin cancer, typically arising in sun-exposed areas such as the head and neck. It often appears as a pearly or waxy bump, sometimes with visible blood vessels or a central depression. BCC grows slowly and rarely spreads to other parts of the body, but it can invade surrounding tissue if left untreated. Early detection and removal are crucial for effective treatment and preventing complications.' },
    { name: 'Actinic keratosis', description: 'Actinic keratosis is a common precancerous skin condition caused by prolonged exposure to ultraviolet (UV) rays, typically from sunlight. It appears as rough, scaly patches or lesions on sun-exposed areas such as the face, ears, neck, scalp, and forearms. These patches can vary in color from pink to brown and are often accompanied by itching or burning sensations. While actinic keratosis itself is not cancerous, it has the potential to develop into squamous cell carcinoma if left untreated. Management usually involves preventive measures such as sun protection and regular skin screenings, along with various treatment options depending on the severity and number of lesions.' },
    { name: 'Benign keratosis (solar lentigo / seborrheic keratosis / lichen planus-like keratosis)', description: 'Benign keratosis, which includes conditions like solar lentigo, seborrheic keratosis, and lichen planus-like keratosis, refers to a group of non-cancerous skin growths characterized by thickened, rough patches or lesions on the skin. These growths typically appear as tan, brown, or black spots or bumps and are often associated with aging or sun exposure. While generally harmless, they can resemble skin cancer in appearance, making proper diagnosis important for appropriate management and treatment.' },
    { name: 'Dermatofibroma', description: 'Dermatofibroma is a common benign skin lesion characterized by a firm, often dimpled nodule that typically appears on the limbs. It is usually brownish to reddish in color and may be tender or itchy. Dermatofibromas are harmless and typically do not require treatment unless they cause discomfort or aesthetic concerns. Biopsy is often performed to confirm the diagnosis.' },
    { name: 'Vascular lesion', description: 'Vascular lesions refer to abnormalities in blood vessels that can manifest as visible marks or discolorations on the skin. These lesions can vary in appearance, from small red or purple spots to larger patches or bulges. They are often caused by abnormalities in blood vessel structure or function, leading to issues such as dilated capillaries, hemangiomas, or port-wine stains. Treatment options depend on the type and severity of the lesion and may include laser therapy, sclerotherapy, or surgical removal.' },
    { name: 'Squamous cell carcinoma', description: 'Squamous Cell Carcinoma (SCC) is a type of skin cancer that originates in the squamous cells, which are thin, flat cells found in the outer layer of the skin (epidermis). It typically appears as a firm, red nodule or a flat lesion with a scaly crust. SCC can develop on sun-exposed areas of the body but may also occur in areas not regularly exposed to sunlight. It has the potential to metastasize (spread) to other parts of the body if not treated early. Risk factors include prolonged sun exposure, fair skin, older age, and immunosuppression. Treatment often involves surgical removal, with a high cure rate if detected and treated early. Regular skin examinations and sun protection are key for prevention.' },
    // { name: 'None of the others', description: 'Tinea is a fungal infection of the skin, commonly called ringworm. It can affect the skin on your body, scalp, feet, or nails. Candidiasis is a fungal infection caused by a yeast (a type of fungus) called Candida.' },
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
