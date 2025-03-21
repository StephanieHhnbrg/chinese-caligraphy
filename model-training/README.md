<h1>
    <img style="width: 40px;" src="../.github/images/favicon.ico">
    Chanzi Model
</h1>

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?color=blue)](./../LICENSE)

### Introduction
This directory contains the necessary scripts and image data to train a machine learning model for image classification.
The model is designed to process Chinese characters and to decompose them into their root components, known as radicals.

Since a Chinese character consists of multiple radicals, the model uses both Softmax and Sigmoid activation functions to support multi-label classification. 
This allows each image to be assigned to multiple classes simultaneously. There are 233 classes in total, corresponding to the 233 unique radicals in the dataset.


### Data Split (WIP)
To prevent overfitting, the dataset is split as follows:
- Training data: 80%
- Test data: 10%
- Validation data: 10%

### Scripts
This directory contains two scripts.
- **train.py**: This script is used to train the model on the dataset. It processes the data, initializes the neural network, and trains it for the specified number of epochs. The resulting model is saved as ```chanzi_model.h5```. (Refer to the Training Process section for more details.)
- **analyze_data.py**: This script helps analyze the dataset to uncover potential class imbalances. It generates statistics and visualizations to identify how different classes are distributed, which is crucial for addressing any data imbalances that might affect model performance.
- 
### Training process
#### Steps:
1. Import libraries
2. Load datasets
3. Define model and callbacks
4. Compile model
5. Train model
6. Evaluate model

After successful training, the model is saved as `chanzi_model.h5`. 
This model can then be used in the frontend application. 
To do so, it needs to be converted into a JSON format and stored in the frontend's assets folder (see SetUp step 4).

To trigger the training process, run the following commands:
1. Run the training script \
   `cd model-training` \
   `python3.9 train.py`

2. Convert the model for frontend usage \
   `tensorflowjs_converter --input_format keras chanzi_model.h5 ../src/assets/model`

3. Correct the label in frontend model \
Replace ```batch_shape``` with ```batch_input_shape``` in the model.json

4. Test the frontend integration \
a. Start the frontend application ```npm run start``` \
b. Trigger ML predictions by inputting hanzi into the search field at http://localhost:4200/hanzi-search \
c. Open the browser’s Developer Tools, go to the Network and Console tabs to monitor the prediction requests and check for any errors or logs

### SetUp for MacOS (M2 Chip)

#### Prerequisites: 
Tensorflow requires the Python version is 3.7 to 3.9 \
Check your Python version using: `python --version`

#### Steps:
1. Create virtual environment \
`python3.9 -m venv env` \
`source env/bin/activate`

2. Install dependencies \
`pip install tensorflow-macos` \
`pip install tensorflow-metal` \
`pip install tensorflowjs`

   
#### Library Versions
numpy==1.26.4 \
tensorflow==2.19.0 \
tensorflow-estimator==2.15.0 \
tensorflow-hub==0.16.1 \
tensorflow-io-gcs-filesystem==0.37.1 \
tensorflow-macos==2.15.0 \
tensorflow-metal==1.2.0 \
tensorflow_decision_forests==1.12.0 \
tensorflowjs==4.22.0 \
ydf==0.11.0 

Python: 3.9.21 \
pip: 24.3.1 
