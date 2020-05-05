import { getRandomNumber, makeRoundData } from '../utils.js';
import main from '../index.js';

export const isEven = (number) => number % 2 === 0;

const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  return makeRoundData(randomNumber, getAnswer(randomNumber));
};

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  main(getRoundData, gameRules);
};
