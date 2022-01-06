import { startGame, numberOfGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';
// eslint-disable-next-line consistent-return
const calculateGCD = (num1, num2, gcd = 1) => {
  if (num1 === 0 || num2 === 0) {
    return Math.max(num1, num2);
  }
  let divider = 2;
  while (divider <= Math.min(num1, num2)) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return calculateGCD(num1 / divider, num2 / divider, gcd * divider);
    }
    divider += 1;
  }
  if (divider > Math.min(num1, num2)) {
    return gcd;
  }
};
const createQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
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
