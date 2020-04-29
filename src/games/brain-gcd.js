import pairs from '@hexlet/pairs';
import {
  makeDecreasingPairOfNumbers, getFirstNumber, getSecondNumber, getGcd,
} from '../math-lib.js';
import main from '../index.js';

const makeQuestionForChallenge = (pairOfNumbers) => `${getFirstNumber(pairOfNumbers)} ${getSecondNumber(pairOfNumbers)}`;

const makeBrainGcdChallenge = () => {
  const pairOfNumbers = makeDecreasingPairOfNumbers();
  const questionForChallenge = makeQuestionForChallenge(pairOfNumbers);
  const answer = getGcd(getFirstNumber(pairOfNumbers), getSecondNumber(pairOfNumbers));
  return pairs.cons(questionForChallenge, answer);
};

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  main(makeBrainGcdChallenge, gameRules);
};
