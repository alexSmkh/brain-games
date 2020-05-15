import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const lengthProgression = 10;

const makeProgression = (firstElement, step) => {
  const iter = (progression, currentNumber) => {
    if (progression.length === lengthProgression) return progression;
    progression.push(currentNumber);
    return iter(progression, currentNumber + step);
  };
  return iter([firstElement], firstElement);
};

const getRoundData = () => {
  const randomPosition = getRandomNumber(1, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const firstElementOfProgression = getRandomNumber();
  const progression = makeProgression(firstElementOfProgression, stepOfProgression);
  const answer = String(progression[randomPosition]);
  progression[randomPosition] = '..';
  const question = progression.join(' ');
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
