# Sentence Generator

This web application is designed to allow users learning English to form proper sentences. It uses the following [Sentence Generating API](https://linguatools.org/language-apis/sentence-generating-api/).

## How to Build & Run

```
npm install --prefix ./sentence-generator-ui
npm install --prefix ./sentence-generator-server
npm run build --prefix ./sentence-generator-ui
npm run start --prefix ./sentence-generator-server
```

Then, navigate to ```http://localhost:8080/```.

## Frontend Architecture

The client-side web application is developed using Angular 11. There are 2 custom components: ```SentenceGeneratorComponent``` & ```HeaderComponent```. I've created a single service, ```GeneratorService```, which uses Angular's ```HttpClient``` to make *GET* requests to the *Linguatools* API. A single interface, ```GeneratorValues```, is used to define the properties of the sentence form.

UI components are built using [Angular Material](https://material.angular.io/).

## Backend Architecture

The server-side application is built using the [Node.js](https://nodejs.org/en/) runtime and [Express](https://expressjs.com/) web framework.