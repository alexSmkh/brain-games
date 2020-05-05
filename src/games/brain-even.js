import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  return makeRoundData(randomNumber, getAnswer(randomNumber));
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
