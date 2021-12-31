import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const startIsEvenGame = () => {
  const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const createQuestions = () => {
    const questions = [];
    for (let i = 0; i < numberOfGames; i += 1) {
      const question = getRandomNumber(100);
      questions.push(question);
    }
    return questions;
  };
  const createRightAnswers = (questionsOfGame) => {
    const rightAnswers = [];
    for (let i = 0; i < questionsOfGame.length; i += 1) {
      const rightAnswer = isEven(questionsOfGame[i]);
      rightAnswers.push(rightAnswer);
    }
    return rightAnswers;
  };
  const questions = createQuestions();
  const rightAnswers = createRightAnswers(questions);
  createQuestions(questions);
  startGame(ruleOfGame, questions, rightAnswers, numberOfGames);
};

export default startIsEvenGame;
