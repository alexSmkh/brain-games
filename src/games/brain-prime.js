import pairs from '@hexlet/pairs';
import { getRandomNumber, isNumberPrime } from '../math-lib.js';

export const getBrainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no"';

export const getAnswer = (boolValue) => ((boolValue) ? 'yes' : 'no');

export const getBrainPrimeChallenge = () => {
  const question = getRandomNumber();
  const answer = getAnswer(isNumberPrime(question));
  return pairs.cons(question, answer);
};
