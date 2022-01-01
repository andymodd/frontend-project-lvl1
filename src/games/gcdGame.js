import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';
const startGcdGame = () => {
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
  const createQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    for (let i = 0; i < numberOfGames; i += 1) {
      const firstNumber = getRandomNumber(100);
      const secondNumber = getRandomNumber(100);
      const question = `${firstNumber} ${secondNumber}`;
      const rightAnswer = `${calculateGCD(firstNumber, secondNumber)}`;
      questionsAndAnswers[i] = [];
      questionsAndAnswers[i][0] = question;
      questionsAndAnswers[i][1] = rightAnswer;
    }
    return questionsAndAnswers;
  };
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers, numberOfGames);
};

export default startGcdGame;
