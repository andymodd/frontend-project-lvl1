import _ from 'lodash';
import { startGame, numberOfGames } from '../index.js';

const ruleOfGame = 'What is the result of the expression?';
const arithmeticOperators = ['+', '-', '*'];

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    default:
      throw new Error('invalid operator');
  }
};

const createQuestionAndAnswer = () => {
  const firstOperand = _.random(100);
  const secondOperand = _.random(100);
  const operator = arithmeticOperators[_.random(2)];
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
