# import necessary libraries
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from torchvision import transforms
from PIL import Image
import io
import os
from model import ECL_model

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


model = ECL_model()
model_path = os.path.join(os.path.dirname(__file__), "model-ISIC2019.pth")
model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')),strict=True)
model.eval()

def transform_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    return transform(image).unsqueeze(0)

def get_prediction(image_bytes):
    tensor = transform_image(image_bytes)
    outputs = model(tensor)
    predicted_class = torch.argmax(outputs, dim=1)
    return predicted_class

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected for uploading'}), 400
    
    if file:
        image_bytes = file.read()
        prediction = get_prediction(image_bytes)
        return jsonify({'prediction': int(prediction)}), 200
    
    return jsonify({'error': 'Something went wrong'}), 500

if __name__ == '__main__':
    app.run(debug=True)