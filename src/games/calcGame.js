import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const ruleOfGame = 'What is the result of the expression?';
const startCalcGame = () => {
  const arithmeticOperators = ['+', '-', '*'];
  const createQuestionsAndAnswers = () => {
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
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers, numberOfGames);
};

export default startCalcGame;
