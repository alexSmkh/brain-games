import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!\n');

const getUsername = () => readlineSync.question('May I have your name? ');

const sayHello = (username) => console.log(`Hello, ${username}!\n`);

const explainRules = (rules) => console.log(`${rules}\n`);

const getUserAnswer = () => readlineSync.question('Your answer: ');

const askQuestion = (question) => console.log(`Question: ${question}`);

const congratulate = (username) => console.log(`Congratulations, ${username}!\n`);

const sayTryAgain = (username) => console.log(`Let's try again, ${username}!\n`);

const sayCorrect = () => console.log('Correct!\n');

const sayCorrectAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n`);

const getQuestion = (challenge) => pairs.car(challenge);

const getAnswer = (challenge) => pairs.cdr(challenge);

const runGame = (getRoundData, score = 0) => {
  const numberRounds = 3;
  if (score === numberRounds) return true;

  const challenge = getRoundData();
  askQuestion(getQuestion(challenge));

  const userAnswer = getUserAnswer();
  const correctAnswer = String(getAnswer(challenge));
  const scoreForAnswer = (userAnswer === correctAnswer ? 1 : 0);
  if (!scoreForAnswer) {
    sayCorrectAnswer(userAnswer, getAnswer(challenge));
    return false;
  }
  sayCorrect();
  return runGame(getRoundData, score + 1);
};

const main = (getRoundDataFunc, gameRules) => {
  greeting();
  const username = getUsername();
  sayHello(username);
  explainRules(gameRules);

  const gameResult = runGame(getRoundDataFunc);
  if (gameResult) congratulate(username);
  else sayTryAgain(username);
};

export default main;
