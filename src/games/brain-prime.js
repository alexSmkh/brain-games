import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export const isDivisorExist = (number, divisor) => {
  if (divisor === 1) return false;
  if (number % divisor === 0) return true;
  return isDivisorExist(number, divisor - 1);
};

export const isNumberPrime = (number) => {
  if (number % 2 === 0) return false;
  return !(isDivisorExist(number, Math.floor(number / 2)));
};

const getRoundData = () => {
  const question = getRandomNumber();
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
