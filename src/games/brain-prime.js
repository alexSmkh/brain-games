import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isNumberPrime = (number) => {
  const isDivisorExist = (dividend, divisor) => {
    if (divisor === 1) return false;
    if (dividend % divisor === 0) return true;
    return isDivisorExist(dividend, divisor - 1);
  };
  return !(isDivisorExist(number, Math.floor(number / 2)));
};

const getRoundData = () => {
  const question = String(getRandomNumber());
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
