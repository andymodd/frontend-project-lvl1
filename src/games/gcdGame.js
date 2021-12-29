import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startGcdGame = () => {
  // eslint-disable-next-line consistent-return
  const calculateGCD = (num1, num2, gcd = 1) => {
    const findMin = (number1, number2) => (number1 > number2 ? number2 : number1);
    const findMax = (number1, number2) => (number1 > number2 ? number1 : number2);
    if (num1 === 0 || num2 === 0) {
      return findMax(num1, num2);
    }
    let divider = 2;
    while (divider <= findMin(num1, num2)) {
      if (num1 % divider === 0 && num2 % divider === 0) {
        return calculateGCD(num1 / divider, num2 / divider, gcd * divider);
      }
      divider += 1;
    }
    if (divider > findMin(num1, num2)) {
      return gcd;
    }
  };
  const ruleOfGame = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const rightAnswers = [];
  const createQuestions = () => {
    for (let i = 0; i < numberOfGames; i += 1) {
      const firstNumber = getRandomNumber(100);
      const secondNumber = getRandomNumber(100);
      const rightAnswer = `${calculateGCD(firstNumber, secondNumber)}`;
      questions.push(`${firstNumber} ${secondNumber}`);
      rightAnswers.push(rightAnswer);
    }
  };
  createQuestions();
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startGcdGame;
