import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startIsPrimeGame = () => {
  const isPrime = (number) => {
    if (number === 1) {
      return false;
    }
    if (number === 2) {
      return true;
    }
    let counter = 2;
    do {
      if (number % counter === 0) {
        return false;
      }
      counter += 1;
    } while (counter < number);
    return true;
  };
  const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const rightAnswers = [];
  const createQuestions = () => {
    for (let i = 0; i < numberOfGames; i += 1) {
      console.log(questions, rightAnswers);
      const numbeInGame = getRandomNumber(100);
      const rightAnswer = isPrime(numbeInGame) ? 'yes' : 'no';
      questions.push(numbeInGame);
      rightAnswers.push(rightAnswer);
      console.log(questions, rightAnswers, numbeInGame);
    }
  };
  createQuestions();
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startIsPrimeGame;
