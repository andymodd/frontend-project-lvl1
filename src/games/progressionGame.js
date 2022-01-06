import { startGame, numberOfGames } from '../index.js';
import getRandomNumber from '../utils.js';

const ruleOfGame = 'What number is missing in the progression?';
const createProgression = (length, firstItem, stepOfProgresstion) => {
  const progression = [];
  progression[0] = firstItem;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + stepOfProgresstion;
  }
  return progression;
};
const createQuestionsAndAnswers = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers[i] = [];
    const length = getRandomNumber(5, 10);
    const firstItem = getRandomNumber(100);
    const stepOfProgresstion = getRandomNumber(10);
    const progression = createProgression(length, firstItem, stepOfProgresstion);
    const indexOfMissingItem = getRandomNumber(progression.length - 1);
    const rightAnswer = progression[indexOfMissingItem];
    progression[indexOfMissingItem] = '..';
    questionsAndAnswers[i][0] = progression.join(' ');
    questionsAndAnswers[i][1] = `${rightAnswer}`;
  }
  return questionsAndAnswers;
};
const startProgressionGame = () => {
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startProgressionGame;
