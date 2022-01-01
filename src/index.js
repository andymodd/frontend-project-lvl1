import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRandomNumber = (min, max) => _.random(min, max);

const numberOfGames = 3;

const startGame = (ruleOfGame, questionsAndAnswers, amountOfGames) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfGame);
  for (let counter = 0; counter < amountOfGames; counter += 1) {
    const userAnswer = readlineSync.question(`Question: ${questionsAndAnswers[counter][0]} `);
    if (userAnswer !== questionsAndAnswers[counter][1]) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questionsAndAnswers[counter][1]}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { startGame, getRandomNumber, numberOfGames };
