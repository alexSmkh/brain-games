import { getRandomNumber, makeChallenge } from '../utils.js';
import main from '../index.js';

export const isEven = (number) => number % 2 === 0;

const getBrainEvenAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const makeBrainEvenChallenge = () => {
  const randomNumber = getRandomNumber();
  return makeChallenge(randomNumber, getBrainEvenAnswer(randomNumber));
};

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  main(makeBrainEvenChallenge, gameRules);
};
