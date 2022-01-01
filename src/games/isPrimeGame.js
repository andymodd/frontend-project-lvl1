import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let counter = 2; counter < number; counter += 1) {
    if (number % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};
const startIsPrimeGame = () => {
  const createQuestionsAndAnswers = () => {
    const questionsAndAnswers = [];
    for (let i = 0; i < numberOfGames; i += 1) {
      const question = getRandomNumber(100);
      const rightAnswer = isPrime(question) ? 'yes' : 'no';
      questionsAndAnswers[i] = [];
      questionsAndAnswers[i][0] = question;
      questionsAndAnswers[i][1] = rightAnswer;
    }
    return questionsAndAnswers;
  };
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers, numberOfGames);
};

export default startIsPrimeGame;
