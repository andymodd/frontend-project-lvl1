import {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
} from '../index.js';

const startGame = () => {
  const isEven = (number) => (number % 2 === 0);

  const userName = greetUser();
  for (let i = 0; i < numberOfGames; i += 1) {
    const numbeInGame = getRandomNumber(100);
    console.log(`Question: ${numbeInGame}`);
    const rightAnswer = isEven(numbeInGame) ? 'yes' : 'no';
    const userAnswer = askQuestionAndGetAnswer('Your question: ');
    if (!checkAnswer(userAnswer, rightAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
