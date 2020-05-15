import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgression = (firstElement, step) => {
  const iter = (progression, currentNumber) => {
    if (progression.length === lengthOfProgression) return progression;
    progression.push(currentNumber);
    return iter(progression, currentNumber + step);
  };
  return iter([], firstElement);
};

const getRoundData = () => {
  const indexOfHiddenElement = getRandomNumber(0, lengthOfProgression - 1);
  const step = getRandomNumber(1, 10);
  const firstElement = getRandomNumber();
  const progression = makeProgression(firstElement, step);
  const answer = String(progression[indexOfHiddenElement]);
  progression[indexOfHiddenElement] = '..';
  const question = progression.join(' ');
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
