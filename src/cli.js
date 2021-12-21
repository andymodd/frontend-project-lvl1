import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export default askQuestion;
