# import necessary libraries
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image
import io
import timm  # Ensure timm library is installed
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# # Define the ViT model class
# class ViTDetector(nn.Module):
#     def __init__(self, backbone='vit_base_patch16_224', num_classes=10):
#         super().__init__()
#         self.backbone = timm.create_model(backbone, pretrained=True, num_classes=num_classes)

#     def forward(self, x):
#         x = self.backbone(x)
#         return x

# # Load your pre-trained ViT model
# model = ViTDetector()
# model_path = os.path.join(os.path.dirname(__file__), "checkpoints_vit_base_patch16_224.augreg_in21k_epoch4")
# model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
# model.eval()

def transform_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    return transform(image).unsqueeze(0)

def get_prediction(image_bytes):
    tensor = transform_image(image_bytes)
    return 0
    outputs = model(tensor)
    _, predicted = torch.max(outputs.data, 1)
    return predicted.item()

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
        return jsonify({'prediction': prediction}), 200
    
    return jsonify({'error': 'Something went wrong'}), 500

if __name__ == '__main__':
    app.run(debug=True)