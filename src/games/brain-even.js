import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return makeRoundData(String(question), answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
