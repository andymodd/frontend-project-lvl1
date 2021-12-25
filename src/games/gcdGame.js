import {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
} from '../index.js';

const startGame = () => {
  // eslint-disable-next-line consistent-return
  const calculateGCD = (num1, num2, gcd = 1) => {
    const min = (number1, number2) => (number1 > number2 ? number2 : number1);
    let divider = 2;
    while (divider <= min(num1, num2)) {
      if (num1 % divider === 0 && num2 % divider === 0) {
        return calculateGCD(num1 / divider, num2 / divider, gcd * divider);
      }
      divider += 1;
    }
    if (divider > min(num1, num2)) {
      return gcd;
    }
  };
  const userName = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  for (let counter = 0; counter < numberOfGames; counter += 1) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const userAnswer = Number(askQuestionAndGetAnswer(`Question: ${firstNumber} ${secondNumber} `));
    const rightAnswer = calculateGCD(firstNumber, secondNumber);
    if (!checkAnswer(userAnswer, rightAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
