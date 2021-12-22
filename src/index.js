import readlineSync from 'readline-sync';

const askQuestionAndGetAnswer = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const greet = (greeting) => {
  console.log(greeting);
  const playerName = askQuestion('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

const startGame = (ruleOfGame, question, numberOfGames = 3) => {
  const userName = greet('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  for (let counter = 0; counter < numberOfGames; counter += 1) {
    console.log(question);
    const userAnswer = askQuestionAndGetAnswer('Your answer: ');
    if (!checkAnswer(userAnswer, ))
  }
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const checkAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

export {
  greet, getRandomNumber, checkAnswer, askQuestionAndGetAnswer,
};
