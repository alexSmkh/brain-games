import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

const makeDecreasingPairOfNumbers = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return (num1 > num2) ? [num1, num2] : [num2, num1];
};

const getRoundData = () => {
  const [num1, num2] = makeDecreasingPairOfNumbers();
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
