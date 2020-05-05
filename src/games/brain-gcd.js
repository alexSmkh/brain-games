import {
  getFirstNumberOfPair, getSecondNumberOfPair, getRandomNumber,
  makePairOfNumbers, makeRoundData,
} from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

const makeQuestionForChallenge = (
  pairOfNumbers,
) => `${getFirstNumberOfPair(pairOfNumbers)} ${getSecondNumberOfPair(pairOfNumbers)}`;

const makeDecreasingPairOfNumbers = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return (num1 > num2) ? makePairOfNumbers(num1, num2) : makePairOfNumbers(num2, num1);
};

const getRoundData = () => {
  const pairOfNumbers = makeDecreasingPairOfNumbers();
  const questionForChallenge = makeQuestionForChallenge(pairOfNumbers);
  const answer = String(getGcd(
    getFirstNumberOfPair(pairOfNumbers),
    getSecondNumberOfPair(pairOfNumbers),
  ));
  return makeRoundData(questionForChallenge, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
