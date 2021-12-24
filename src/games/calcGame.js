import {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
} from '../index.js';

const arithmeticOperators = ['+', '-', '*'];

const startGame = () => {
  const userName = greetUser();
  for (let counter = 0; counter < numberOfGames; counter += 1) {
    const firstOperand = getRandomNumber(100);
    const secondOperand = getRandomNumber(100);
    const operator = arithmeticOperators[getRandomNumber(2)];
    const question = `${firstOperand} ${operator} ${secondOperand} `;
    const userAnswer = Number(askQuestionAndGetAnswer(question));
    let rightAnswer;
    switch (operator) {
      case '+':
        rightAnswer = firstOperand + secondOperand;
        break;
      case '-':
        rightAnswer = firstOperand - secondOperand;
        break;
      case '*':
        rightAnswer = firstOperand * secondOperand;
        break;
      default:
    }
    if (!checkAnswer(userAnswer, rightAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\n Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
