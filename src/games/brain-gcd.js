import pairs from '@hexlet/pairs';
import {
  makeDecreasingPairOfNumbers, getFirstNumber, getSecondNumber, getGcd,
} from '../math-lib.js';

export const getBrainGcdRules = () => 'Find the greatest common divisor of given numbers.';

const makeQuestionForChallenge = (pairOfNumbers) => `${getFirstNumber(pairOfNumbers)} ${getSecondNumber(pairOfNumbers)}`;

export const getBrainGcdChallenge = () => {
  const pairOfNumbers = makeDecreasingPairOfNumbers();
  const questionForChallenge = makeQuestionForChallenge(pairOfNumbers);
  const answer = getGcd(getFirstNumber(pairOfNumbers), getSecondNumber(pairOfNumbers));
  return pairs.cons(questionForChallenge, answer);
};
