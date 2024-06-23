# AI-Skin-Disease-Detection
# AI-Based Skin Disease Detection



## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dataset](#dataset)
- [Model](#model)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project aims to utilize artificial intelligence to detect various skin diseases from images. By leveraging deep learning techniques, specifically convolutional neural networks (CNNs), this tool can assist dermatologists in diagnosing skin conditions more accurately and efficiently.

## Features
- **Automatic Detection**: Identify skin diseases from images with high accuracy.
- **User-Friendly Interface**: Easy to use web application for uploading images and viewing results.
- **Extensible**: Easily add support for more skin diseases.
- **Comprehensive Reports**: Generate detailed reports of the analysis.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/skin-disease-detection.git
    cd skin-disease-detection
    ```

2. **Create a virtual environment and activate it**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages**
    ```bash
    pip install -r requirements.txt
    ```

4. **Download the dataset** (see [Dataset](#dataset) section)

5. **Run the backend Server**
    ```bash
    python backend/app.py
    ```
    
5. **Run the frontend**
    ```bash
    cd node_stuff
    npm install
    npm start
    ```

## Usage
1. Launch the web application.
2. Upload an image of the skin condition.
3. Wait for the model to analyze the image.
4. View the results and the detailed report.

## Dataset
The dataset used for training and testing the model can be found [here](https://challenge.isic-archive.com/landing/2019/). 25,331 images are available for training across 8 different categories. Additionally, the test dataset (planned release August 2nd) will contain an additional outlier class not represented in the training data, which developed systems must be able to identify.

## Model
The model architecture is based on a convolutional neural network (CNN) implemented using Pytorch. It is using ResNet for backbone, and leverages contrastive learning. The implementation is inspired by the work found in the [ECL GitHub repository](https://github.com/zylbuaa/ECL/tree/main).


- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)

