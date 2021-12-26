import {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
} from '../index.js';

const startGame = () => {
  const isPrime = (number) => {
    let counter = 2;
    do {
      if (number % counter === 0) {
        return false;
      }
      counter += 1;
    } while (counter < number);
    return true;
  };
  const userName = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < numberOfGames; i += 1) {
    const numbeInGame = getRandomNumber(100);
    console.log(`Question: ${numbeInGame}`);
    const rightAnswer = isPrime(numbeInGame) ? 'yes' : 'no';
    const userAnswer = askQuestionAndGetAnswer('Your question: ');
    if (!checkAnswer(userAnswer, rightAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
