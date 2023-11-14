'use strict';

// * >==> Steps >==>
/* 
1) Create a list of words;
2) Able to randomly pick a word from list;
3) Create a phrase consisting of random words;
4) Display my phrase on the page;
5) Be able to connect the button to the creation of the phrase.
*/

import { nouns, actions, articles } from './helper.js';

const phrase = document.querySelector('.phrase'),
  button = document.querySelector('.generate-phrase');

const pickRandomWord = (listOfWords) => {
  const randomNum = Math.floor(Math.random() * listOfWords.length);

  return listOfWords[randomNum]
}

const generateRandomPhrase = () => {
  const randomPhrase = `${pickRandomWord(articles)} ${pickRandomWord(nouns)} ${pickRandomWord(actions)} ${pickRandomWord(articles)} ${pickRandomWord(nouns)}!`;

  return randomPhrase[0].toUpperCase() + randomPhrase.slice(1);
};

button.addEventListener('click', () => {
  const newPhrase = generateRandomPhrase();
  phrase.innerText = newPhrase;
});