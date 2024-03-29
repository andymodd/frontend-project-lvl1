import _ from 'lodash';
import { startGame, numberOfGames } from '../index.js';

const ruleOfGame = 'What number is missing in the progression?';

const createProgression = (length, firstItem, stepOfProgresstion) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const current = firstItem + stepOfProgresstion * i;
    progression.push(current);
  }
  return progression;
};

const createQuestionAndAnswer = () => {
  const length = _.random(5, 10);
  const firstItem = _.random(100);
  const stepOfProgresstion = _.random(10);
  const progression = createProgression(length, firstItem, stepOfProgresstion);
  const indexOfMissingItem = _.random(progression.length - 1);
  const answer = `${progression[indexOfMissingItem]}`;
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
