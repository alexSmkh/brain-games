import pairs from '@hexlet/pairs';
import { getRandomNumber, isNumberPrime } from '../math-lib.js';
import main from '../index.js';

const makeBrainPrimeChallenge = () => {
  const question = getRandomNumber();
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return pairs.cons(question, answer);
};

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  main(makeBrainPrimeChallenge, gameRules);
};
