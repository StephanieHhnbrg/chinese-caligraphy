## Image generation
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?color=blue)](./../../../LICENSE.md)
[![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?logo=angular&logoColor=white)](https://angular.dev/)
[![Cypress](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff)](https://www.cypress.io/)

### Introduction
This component is designed to generate images for training, testing, and validation of the [Chanzi model](../../../model-training/README.md). 
The generated images are greyscale HTML Image elements of size 40x40px, each containing a Chinese Hanzi character. 
Additionally, a TextNode is added to the image, which includes important metadata such as the Hanzi character and its composition.

By using Cypress, the images will be automatically downloaded into the cypress/download folder, with the metadata embedded in the image file names.

Follow these steps to generate the dataset required for model training.



### Steps

1. Adapt the data in the [`image-generation.component.ts`](./image-generation.component.ts) \
Populate the word list with chinese characters and their compositions. Hereby the functionalities of the [character-service](./../services/character.service.ts), providing the existing application's vocabulary, can be used.

 

2. Start the app with the image-generation configuration \
   ``npm run img-gen``
This command enables a feature flag to load the image-generation component 



3. Run Cypress \
``npx cypress open`` 



4. Start the image download \
Ensure the folder [`cypress/download`](../../../cypress/download/) is empty. This is where the generated images will be saved. \
In the Cypress interface navigate through: E2E Testing > Chrome > Start \
Run [`training-data-generation.cy.ts`](../../../cypress/e2e/training-data-generation.cy.ts) 



5. Use the generated image in the model training \ 
Once the images have been generated and downloaded, they will be stored in the [`cypress/download`](../../../cypress/download/) folder. \
Move these images to one of the dataset directories: train, test, validate \
Begin the training process with the newly generated images as input.
