import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const checkAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;
