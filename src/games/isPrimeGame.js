import _ from 'lodash';
import { startGame, numberOfGames } from '../index.js';

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
  }
  return true;
};

const createQuestionAndAnswer = () => {
  const question = _.getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startIsPrimeGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers.push(createQuestionAndAnswer());
  }
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startIsPrimeGame;
