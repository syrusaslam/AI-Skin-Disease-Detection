import React, { useState } from "react";
import "./UploadForm.css";

const disease_list = [
    { id: 0, name: "Melanoma" },
    { id: 1, name: "Melanocytic nevus" },
    { id: 2, name: "Basal cell carcinoma" },
    { id: 3, name: "Actinic keratosis" },
    {
        id: 4,
        name: "Benign keratosis (solar lentigo / seborrheic keratosis / lichen planus-like keratosis)",
    },
    { id: 5, name: "Dermatofibroma" },
    { id: 6, name: "Vascular lesion" },
    { id: 7, name: "Squamous cell carcinoma" },
    { id: 8, name: "None of the others" },
];

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [disease, setDisease] = useState("");

    const handleChange = (e) => {
        setError("");
        setDisease("");
        const selectedFile = e.target.files[0];
        const validTypes = ["image/jpeg", "image/jpg"];

        if (selectedFile && validTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError("");
        } else {
            setFile(null);
            setError("Please upload a JPG file.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                // Make a POST request to your Flask backend
                const response = await fetch("http://localhost:5000/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Failed to upload file");
                }

                const data = await response.json();

                // Handle successful upload
                console.log(
                    "File uploaded successfully with prediction:",
                    data.prediction
                );

                const diseaseInfo = disease_list.find(
                    (d) => d.id === data.prediction
                );
                setDisease(diseaseInfo ? diseaseInfo.name : "Unknown disease");
            } catch (error) {
                console.error("Error uploading file:", error.message);
                setError("Failed to upload file");
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="upload-form">
                <input
                    type="file"
                    accept=".jpg,.jpeg"
                    onChange={handleChange}
                />
                {error && <p className="error">{error}</p>}
                {file && (
                    <div className="image-preview">
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                            style={{ maxWidth: "500px" }}
                        />
                    </div>
                )}
                <button type="submit" disabled={!file}>
                    Upload
                </button>
            </form>
            {disease && <p className="disease">Predicted Disease: {disease}</p>}
        </>
    );
}

export default UploadForm;
