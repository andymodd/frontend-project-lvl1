import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRandomNumber = (min, max) => _.random(min, max);

const numberOfGames = 3;

const startGame = (ruleOfGame, questions, rightAnswers, amountOfGames) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfGame);
  for (let counter = 0; counter < amountOfGames; counter += 1) {
    const userAnswer = readlineSync.question(`Question: ${questions[counter]} `);
    if (userAnswer !== rightAnswers[counter]) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswers[counter]}. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { startGame, getRandomNumber, numberOfGames };
