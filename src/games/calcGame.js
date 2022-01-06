import { startGame, numberOfGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'What is the result of the expression?';
const arithmeticOperators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    default:
  }
};
const createQuestionAndAnswer = () => {
  const firstOperand = getRandomNumber(100);
  const secondOperand = getRandomNumber(100);
  const operator = arithmeticOperators[getRandomNumber(2)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = `${calculateExpression(firstOperand, secondOperand, operator)}`;
  return [question, answer];
};
const startCalcGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers.push(createQuestionAndAnswer());
  }
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startCalcGame;
