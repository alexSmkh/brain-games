import pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { getBrainEvenChallenge, getBrainEvenRules } from './games/brain-even.js';
import { getBrainCalcChallenge, getBrainCalcRules } from './games/brain-calc.js';
import { getBrainGcdChallenge, getBrainGcdRules } from './games/brain-gcd.js';
import { getBrainProgressionRules, getBrainProgressionChallenge } from './games/brain-progression.js';
import { getBrainPrimeRules, getBrainPrimeChallenge } from './games/brain-prime.js';

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

const getChallenge = (gameTitle) => {
  let challenge;
  switch (gameTitle) {
    case 'brain-even':
      challenge = getBrainEvenChallenge();
      break;
    case 'brain-calc':
      challenge = getBrainCalcChallenge();
      break;
    case 'brain-gcd':
      challenge = getBrainGcdChallenge();
      break;
    case 'brain-progression':
      challenge = getBrainProgressionChallenge();
      break;
    case 'brain-prime':
      challenge = getBrainPrimeChallenge();
      break;
    default:
      break;
  }
  return challenge;
};

const getRules = (gameTitle) => {
  let rules;
  switch (gameTitle) {
    case 'brain-even':
      rules = getBrainEvenRules();
      break;
    case 'brain-calc':
      rules = getBrainCalcRules();
      break;
    case 'brain-gcd':
      rules = getBrainGcdRules();
      break;
    case 'brain-progression':
      rules = getBrainProgressionRules();
      break;
    case 'brain-prime':
      rules = getBrainPrimeRules();
      break;
    default:
      break;
  }
  return rules;
};

const runGame = (gameTitle, score = 0) => {
  const numberRounds = 3;
  if (score === numberRounds) return true;

  const challenge = getChallenge(gameTitle);
  askQuestion(getQuestion(challenge));

  const userAnswer = getUserAnswer();
  const correctAnswer = String(getAnswer(challenge));
  const scoreForAnswer = (userAnswer === correctAnswer ? 1 : 0);
  if (!scoreForAnswer) {
    sayCorrectAnswer(userAnswer, getAnswer(challenge));
    return false;
  }
  sayCorrect();
  return runGame(gameTitle, score + 1);
};

const main = (gameTitle) => {
  greeting();
  const username = getUsername();
  sayHello(username);
  explainRules(getRules(gameTitle));

  const gameReslut = runGame(gameTitle);
  if (gameReslut) congratulate(username);
  else sayTryAgain(username);
};

export default main;
