import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0 || num1 === 0) return num1 + num2;
  if (num1 > num2) return getGcd(num2, num1 % num2);
  return getGcd(num1, num2 % num1);
};

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
