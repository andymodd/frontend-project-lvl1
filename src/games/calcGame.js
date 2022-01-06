import { startGame, numberOfGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'What is the result of the expression?';
const arithmeticOperators = ['+', '-', '*'];

const calculateExpression = (expressionInString) => {
  const partsOfExpression = expressionInString.split(' ');
  const operator = partsOfExpression[1];
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(partsOfExpression[0]) + Number(partsOfExpression[2]);
      break;
    case '-':
      result = Number(partsOfExpression[0]) - Number(partsOfExpression[2]);
      break;
    case '*':
      result = Number(partsOfExpression[0]) * Number(partsOfExpression[2]);
      break;
    default:
  }
  return result;
};
const createQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const firstOperand = getRandomNumber(100);
    const secondOperand = getRandomNumber(100);
    const operator = arithmeticOperators[getRandomNumber(2)];
    const expression = `${firstOperand} ${operator} ${secondOperand}`;
    questionsAndAnswers[i] = [];
    questionsAndAnswers[i][0] = expression;
    questionsAndAnswers[i][1] = `${calculateExpression(expression)}`;
  }
  return questionsAndAnswers;
};
const startCalcGame = () => {
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startCalcGame;
