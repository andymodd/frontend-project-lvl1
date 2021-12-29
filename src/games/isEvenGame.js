import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startIsEvenGame = () => {
  const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const questions = [];
  const rightAnswers = [];
  const createQuestions = () => {
    for (let i = 0; i < numberOfGames; i += 1) {
      const question = getRandomNumber(100);
      questions.push(question);
      rightAnswers.push(isEven(question));
    }
  };
  createQuestions();
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startIsEvenGame;
