import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils.js';

const runGameRound = (getRoundData, score = 0) => {
  const numberRounds = 3;
  if (score === numberRounds) return true;

  const challenge = getRoundData();
  console.log(`Question: ${getQuestion(challenge)}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(getAnswer(challenge));
  const scoreForAnswer = (userAnswer === correctAnswer ? 1 : 0);
  if (!scoreForAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n`);
    return false;
  }
  console.log('Correct!\n');
  return runGameRound(getRoundData, score + 1);
};

const main = (getRoundData, gameRules) => {
  console.log('Welcome to the Brain Games!\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  console.log(`${gameRules}\n`);

  const gameResult = runGameRound(getRoundData);
  if (gameResult) console.log(`Congratulations, ${username}!\n`);
  else console.log(`Let's try again, ${username}!\n`);
};

export default main;
