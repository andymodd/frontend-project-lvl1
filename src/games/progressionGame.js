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
const createQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const firstItem = getRandomNumber(100);
  const stepOfProgresstion = getRandomNumber(10);
  const progression = createProgression(length, firstItem, stepOfProgresstion);
  const indexOfMissingItem = getRandomNumber(progression.length - 1);
  const answer = progression[indexOfMissingItem];
  progression[indexOfMissingItem] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
const startProgressionGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers.push(createQuestionAndAnswer());
  }
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startProgressionGame;
