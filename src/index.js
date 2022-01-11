import readlineSync from 'readline-sync';

const numberOfGames = 3;

const startGame = (ruleOfGame, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfGame);
  // eslint-disable-next-line no-restricted-syntax
  for (const roundData of questionsAndAnswers) {
    const [question, rightAnswer] = roundData;
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { startGame, numberOfGames };
