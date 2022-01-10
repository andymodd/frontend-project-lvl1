import _ from 'lodash';
import { startGame, numberOfGames } from '../index.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const createQuestionAndAnswer = () => {
  const question = _.random(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startIsEvenGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    questionsAndAnswers.push(createQuestionAndAnswer());
  }
  startGame(ruleOfGame, questionsAndAnswers);
};

export default startIsEvenGame;
