import readlineSync from 'readline-sync';
import _ from 'lodash';

const numberOfGames = 3;

const askQuestionAndGetAnswer = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestionAndGetAnswer('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const getRandomNumber = (min, max) => _.random(min, max);

const checkAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

export {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
};
