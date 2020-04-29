import { getRandomNumber, makeChallenge } from '../utils.js';
import main from '../index.js';

export const isDivisorExist = (number, divisor) => {
  if (divisor === 1) return false;
  if (number % divisor === 0) return true;
  return isDivisorExist(number, divisor - 1);
};

export const isNumberPrime = (number) => {
  if (number % 2 === 0) return false;
  return !(isDivisorExist(number, Math.floor(number / 2)));
};

const makeBrainPrimeChallenge = () => {
  const question = getRandomNumber();
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return makeChallenge(question, answer);
};

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  main(makeBrainPrimeChallenge, gameRules);
};
