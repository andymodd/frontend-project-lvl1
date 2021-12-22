import { greet, getRandomNumber, checkAnswer, askQuestion } from '../index.js';
const isEven = (number) => (number % 2 === 0);

const startGame = () => {
  const playerName = greet('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const numberOfGames = 3;
  for (let i = 0; i < numberOfGames; i += 1) {
    const numbeInGame = getRandomNumber();
    console.log(`Question: ${numbeInGame}`);
    const rightAnswer = isEven(numbeInGame) ? 'yes' : 'no';
    const answer = readlineSync.question('Your question: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${playerName}`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
