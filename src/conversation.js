import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!\n');

const getUsername = () => readlineSync.question('May I have your name? ');

const sayHello = (username) => console.log(`Hello, ${username}!\n`);

const explainRules = () => console.log('Rules: answer "yes" if the number is even, otherwise answer "no".\n');

const getUserAnswer = () => readlineSync.question('Your answer: ');

const askQuestion = (question) => console.log(`Question: ${question}?`);

const congratulate = (username) => console.log(`Congratulations, ${username}!\n`);

const sayTryAgain = (username) => console.log(`Let's try again, ${username}!\n`);

const sayCorrect = () => console.log('Correct!\n');

const sayCorrectAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n`);

export {
  greeting,
  getUsername,
  sayHello,
  explainRules,
  getUserAnswer,
  askQuestion,
  congratulate,
  sayTryAgain,
  sayCorrect,
  sayCorrectAnswer,
};
