import pairs from '@hexlet/pairs';
import { getRandomNumber, isEven } from '../math-lib.js';
import main from '../index.js';

const getBrainEvenAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const makeBrainEvenChallenge = () => {
  const randomNumber = getRandomNumber();
  return pairs.cons(randomNumber, getBrainEvenAnswer(randomNumber));
};

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  main(makeBrainEvenChallenge, gameRules);
};
