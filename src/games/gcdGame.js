import _ from 'lodash';
import { startGame, numberOfGames } from '../index.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const createQuestionAndAnswer = () => {
  const firstNumber = _.random(100);
  const secondNumber = _.random(100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${calculateGCD(firstNumber, secondNumber)}`;
  return [question, answer];
};

const startGcdGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers.push(createQuestionAndAnswer());
  }
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startGcdGame;
