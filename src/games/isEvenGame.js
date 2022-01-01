import { startGame, getRandomNumber, numberOfGames } from '../index.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const startIsEvenGame = () => {
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
  const questionsAndAnswers = createQuestionsAndAnswers();
  startGame(ruleOfGame, questionsAndAnswers, numberOfGames);
};

export default startIsEvenGame;
