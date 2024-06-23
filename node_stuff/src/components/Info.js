import React, { useState } from 'react';
import './Info.css';

function Info() {
  const [activeIndex, setActiveIndex] = useState(null);

  const diseases = [
<<<<<<< HEAD
    { name: 'Melanoma', description: 'Melanoma is a serious form of skin cancer that develops in the melanocytes, the cells responsible for producing melanin, the pigment that gives skin its color. It is characterized by the uncontrolled growth of these pigment-producing cells and often appears as a new or changing mole or dark spot on the skin. Early detection and treatment are crucial, as melanoma can spread to other parts of the body if not treated promptly. Factors such as excessive sun exposure and genetic predisposition increase the risk of developing melanoma.' },
    { name: 'Melanocytic nevus', description: 'A melanocytic nevus, commonly known as a mole, is a benign growth on the skin that arises from melanocytes, the cells responsible for producing pigment. These moles can appear anywhere on the body, are usually brown or black, and can vary in size and shape. While typically harmless, changes in color, size, or shape of a melanocytic nevus can sometimes indicate malignant transformation, such as melanoma, and should be evaluated by a healthcare professional.' },
    { name: 'Basal cell carcinoma', description: 'Basal cell carcinoma (BCC) is the most common type of skin cancer, typically arising in sun-exposed areas such as the head and neck. It often appears as a pearly or waxy bump, sometimes with visible blood vessels or a central depression. BCC grows slowly and rarely spreads to other parts of the body, but it can invade surrounding tissue if left untreated. Early detection and removal are crucial for effective treatment and preventing complications.' },
    { name: 'Actinic keratosis', description: 'Actinic keratosis is a common precancerous skin condition caused by prolonged exposure to ultraviolet (UV) rays, typically from sunlight. It appears as rough, scaly patches or lesions on sun-exposed areas such as the face, ears, neck, scalp, and forearms. These patches can vary in color from pink to brown and are often accompanied by itching or burning sensations. While actinic keratosis itself is not cancerous, it has the potential to develop into squamous cell carcinoma if left untreated. Management usually involves preventive measures such as sun protection and regular skin screenings, along with various treatment options depending on the severity and number of lesions.' },
    { name: 'Benign keratosis (solar lentigo / seborrheic keratosis / lichen planus-like keratosis)', description: 'Benign keratosis, which includes conditions like solar lentigo, seborrheic keratosis, and lichen planus-like keratosis, refers to a group of non-cancerous skin growths characterized by thickened, rough patches or lesions on the skin. These growths typically appear as tan, brown, or black spots or bumps and are often associated with aging or sun exposure. While generally harmless, they can resemble skin cancer in appearance, making proper diagnosis important for appropriate management and treatment.' },
    { name: 'Dermatofibroma', description: 'Dermatofibroma is a common benign skin lesion characterized by a firm, often dimpled nodule that typically appears on the limbs. It is usually brownish to reddish in color and may be tender or itchy. Dermatofibromas are harmless and typically do not require treatment unless they cause discomfort or aesthetic concerns. Biopsy is often performed to confirm the diagnosis.' },
    { name: 'Vascular lesion', description: 'Vascular lesions refer to abnormalities in blood vessels that can manifest as visible marks or discolorations on the skin. These lesions can vary in appearance, from small red or purple spots to larger patches or bulges. They are often caused by abnormalities in blood vessel structure or function, leading to issues such as dilated capillaries, hemangiomas, or port-wine stains. Treatment options depend on the type and severity of the lesion and may include laser therapy, sclerotherapy, or surgical removal.' },
    { name: 'Squamous cell carcinoma', description: 'Squamous Cell Carcinoma (SCC) is a type of skin cancer that originates in the squamous cells, which are thin, flat cells found in the outer layer of the skin (epidermis). It typically appears as a firm, red nodule or a flat lesion with a scaly crust. SCC can develop on sun-exposed areas of the body but may also occur in areas not regularly exposed to sunlight. It has the potential to metastasize (spread) to other parts of the body if not treated early. Risk factors include prolonged sun exposure, fair skin, older age, and immunosuppression. Treatment often involves surgical removal, with a high cure rate if detected and treated early. Regular skin examinations and sun protection are key for prevention.' },
    // { name: 'None of the others', description: 'Tinea is a fungal infection of the skin, commonly called ringworm. It can affect the skin on your body, scalp, feet, or nails. Candidiasis is a fungal infection caused by a yeast (a type of fungus) called Candida.' },
=======
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
    { name: 'Other Diseases', description: 'Currently, our AI-powered skin disease detection tool is capable of identifying only 10 specific skin conditions. This limitation is due to the constraints in our training model and the availability of high-quality data. We are continuously working to improve our model and expand its capabilities to include a broader range of skin diseases. Thank you for your understanding and patience as we strive to enhance the accuracy and scope of our AI tool.'},
>>>>>>> c9f2fbfe85b86e128457cc7c0a78004f2d3536aa
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
