import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startCalcGame = () => {
  const ruleOfGame = 'What is the result of the expression?';
  const arithmeticOperators = ['+', '-', '*'];
  const questions = [];
  const rightAnswers = [];
  const createQuestions = () => {
    for (let i = 0; i < numberOfGames; i += 1) {
      const firstOperand = getRandomNumber(100);
      const secondOperand = getRandomNumber(100);
      const operator = arithmeticOperators[getRandomNumber(2)];
      questions.push(`${firstOperand} ${operator} ${secondOperand}`);
      switch (operator) {
        case '+':
          rightAnswers.push(`${firstOperand + secondOperand}`);
          break;
        case '-':
          rightAnswers.push(`${firstOperand - secondOperand}`);
          break;
        case '*':
          rightAnswers.push(`${firstOperand * secondOperand}`);
          break;
        default:
      }
    }
  };
  createQuestions();
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startCalcGame;
