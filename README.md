<h1>
    <img style="width: 40px;" src=".github/images/favicon.ico">
    Chinese Puzzle
</h1>

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?color=blue)](./LICENSE.md)
[![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?logo=angular&logoColor=white)](https://angular.dev/)
[![Cypress](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff)](https://www.cypress.io/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff)](https://www.python.org/)
[![Tensorflow](https://img.shields.io/badge/Tensorflow-FFA800?logo=tensorflow&logoColor=fff)](https://www.tensorflow.org/)
[![Matplotlib](https://custom-icon-badges.demolab.com/badge/Matplotlib-3776AB?logo=matplotlib&logoColor=fff)](https://matplotlib.org/)

### Introduction
Chinese Puzzle is an innovative platform designed for learning the Chinese language and exploring its complex characters. 
The core components include:
- Radicals Overview: A comprehensive guide to the root elements of Chinese characters, known as radicals.
- Character Visualization: Engaging visuals that illustrate how characters are formed from these root elements.

Through the deconstruction of characters into root elements — a process known as chanzi — users can enhance their ability to recognize and memorize characters, significantly improving their learning experience. 
Additionally, users can expand their vocabulary by browsing specific topic clusters or exploring radicals and their occurrences in various Chinese characters.


Features
- Internationalization: The platform is available in 🇺🇸 English and 🇩🇪 German.
- Vocabulary: Access a collection of the 1,000 most common Chinese words.
- Chanzi Analysis: Interactively explore Chinese characters and their compositions.
- Search Functionality: Search for characters to discover their chanzi and occurrences in other characters.
- Chanzi via [Machine Learning](model-training/README.md): For characters not included in the platform's vocabulary, machine learning is utilized to deconstruct them into root elements.
- [Training Data Generation](src/app/image-generation/README.md): Input data for the model training can be generated in a dedicated process using the existing Vocabulary and [Cypress](https://www.cypress.io/).
Explore the Chinese Puzzle and embark on your journey to mastering the Chinese language!


### Local Setup

The tool is deployed as a <a href='https://stephaniehhnbrg.github.io/chinese-caligraphy/' target='_blank'>Github Page</a>.

But in case you would like to run the project locally, follow these steps:

- Install dependencies: `npm install`
- Start project: `npm run start`
