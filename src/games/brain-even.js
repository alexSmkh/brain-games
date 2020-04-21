import pairs from '@hexlet/pairs';
import { getRandomNumber, isEven } from '../math-lib.js';

export const getBrainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const getBrainEvenAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export const getBrainEvenChallenge = () => {
  const randomNumber = getRandomNumber();
  return pairs.cons(randomNumber, getBrainEvenAnswer(randomNumber));
};
