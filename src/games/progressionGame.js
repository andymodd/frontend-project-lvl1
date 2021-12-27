import {
  numberOfGames, getRandomNumber, checkAnswer, askQuestionAndGetAnswer, greetUser,
} from '../index.js';

const startGame = () => {
  const userName = greetUser();
  console.log('What number is missing in the progression?');
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
  const createQuestion = (progression, indexOfMissingItem) => {
    let question = 'Question:';
    for (let i = 0; i < progression.length; i += 1) {
      if (i === indexOfMissingItem) {
        question += ' .. ';
      } else {
        question += ` ${progression[i]} `;
      }
    }
    return question;
  };
  for (let counter = 0; counter < numberOfGames; counter += 1) {
    const progression = createProgression();
    const indexOfMissingItem = getRandomNumber(progression.length - 1);
    const rightAnswer = progression[indexOfMissingItem];
    const userAnswer = askQuestionAndGetAnswer(createQuestion(progression, indexOfMissingItem));
    const userAnswerToNumber = Number(userAnswer);
    if (!checkAnswer(userAnswerToNumber, rightAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
