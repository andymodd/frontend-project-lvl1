import { startGame, numberOfGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const createQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const question = getRandomNumber(100);
    questionsAndAnswers[i] = [];
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = isEven(question) ? 'yes' : 'no';
  }
  return questionsAndAnswers;
};
const startIsEvenGame = () => {
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startIsEvenGame;
