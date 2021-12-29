import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startProgressionGame = () => {
  const ruleOfGame = 'What number is missing in the progression?';
  const questions = [];
  const rightAnswers = [];
  const createProgression = () => {
    const length = getRandomNumber(5, 10);
    const progression = [];
    progression[0] = getRandomNumber(100);
    const stepOfProgresstion = getRandomNumber(10);
    for (let i = 1; i < length; i += 1) {
      progression[i] = progression[i - 1] + stepOfProgresstion;
    }
    return progression;
  };
  const createQuestions = () => {
    for (let i = 0; i < numberOfGames; i += 1) {
      const progression = createProgression();
      const indexOfMissingItem = getRandomNumber(progression.length - 1);
      const rightAnswer = progression[indexOfMissingItem];
      progression[indexOfMissingItem] = '..';
      questions.push(progression.join(' '));
      rightAnswers.push(`${rightAnswer}`);
    }
  };
  createQuestions();
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startProgressionGame;
