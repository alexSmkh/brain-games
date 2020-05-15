import _ from 'lodash';
import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';


const gameDescription = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const solveExpression = (operator, numbers) => {
  switch (operator) {
    case '+':
      return numbers.reduce((acc, number) => acc + number);
    case '-':
      return numbers.reduce((acc, number) => acc - number);
    case '*':
      return numbers.reduce((acc, number) => acc * number);
    default:
      throw new Error(`Unknown math operator: "${operator}"`);
  }
};

const getRoundData = () => {
  const minNumber = 2;
  const maxNumber = 3;
  const countOfNumbers = getRandomNumber(minNumber, maxNumber);
  const numbers = _.times(countOfNumbers, getRandomNumber);
  const mathOperator = mathOperators[getRandomNumber(0, mathOperators.length - 1)];
  const question = numbers.join(` ${mathOperator} `);
  const answer = String(solveExpression(mathOperator, numbers));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
