import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils.js';

const numberRounds = 3;

const runGameRound = (getRoundData, username) => {
  const iter = (round) => {
    if (round > numberRounds) {
      console.log(`Congratulations, ${username}!\n`);
      return;
    }
    const roundData = getRoundData();
    console.log(`Question: ${getQuestion(roundData)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(roundData);
    if (userAnswer !== correctAnswer) {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!\n`);
      return;
    }
    console.log('Correct!\n');
    iter(round + 1);
  };
  iter(1);
};

const runGameEngine = (getRoundData, gameDescription) => {
  console.log('Welcome to the Brain Games!\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  console.log(`${gameDescription}\n`);
  runGameRound(getRoundData, username);
};

export default runGameEngine;
