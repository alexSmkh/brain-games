import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { getBrainEvenChallenge, getBrainEvenRules } from './games/brain-even.js';
import { getBrainCalcChallenge, getBrainCalcRules } from './games/brain-calc.js';

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

const getQuestion = (questionAndAnswer) => pairs.car(questionAndAnswer);

const getAnswer = (questionAndAnswer) => pairs.cdr(questionAndAnswer);

const getChallenge = (gameName) => {
  let challenge;
  switch (gameName) {
    case 'brain-even':
      challenge = getBrainEvenChallenge();
      break;
    case 'brain-calc':
      challenge = getBrainCalcChallenge();
      break;
    default:
      break;
  }
  return challenge;
};

const getRules = (gameName) => {
  let rules;
  switch (gameName) {
    case 'brain-even':
      rules = getBrainEvenRules();
      break;
    case 'brain-calc':
      rules = getBrainCalcRules();
      break;
    default:
      break;
  }
  return rules;
};

const runGame = (gameName, score = 0) => {
  const numberRounds = 3;
  if (score === numberRounds) return true;

  const challenge = getChallenge(gameName);
  askQuestion(getQuestion(challenge));

  const userAnswer = getUserAnswer();
  const correctAnswer = String(getAnswer(challenge));
  const scoreForAnswer = (userAnswer === correctAnswer ? 1 : 0);
  if (!scoreForAnswer) {
    sayCorrectAnswer(userAnswer, getAnswer(challenge));
    return false;
  }
  sayCorrect();
  return runGame(gameName, score + 1);
};

const main = (gameName) => {
  greeting();
  const username = getUsername();
  sayHello(username);
  explainRules(getRules(gameName));

  const gameReslut = runGame(gameName);
  if (gameReslut) congratulate(username);
  else sayTryAgain(username);
};

export default main;
