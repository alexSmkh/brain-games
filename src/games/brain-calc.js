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

const makeQuestion = (operator, numbers) => {
  const partsOfQuestion = numbers.reduce((acc, number, index, arr) => {
    if (index >= arr.length - 1) {
      acc.push(number);
    } else {
      acc.push(number, operator);
    }
    return acc;
  }, []);
  return partsOfQuestion.join(' ');
};

const getRoundData = () => {
  const countOfNumbers = 2;
  const numbers = _.times(countOfNumbers, getRandomNumber);
  const mathOperator = mathOperators[getRandomNumber(mathOperators.length - 1)];
  const question = makeQuestion(mathOperator, numbers);
  const answer = String(solveExpression(mathOperator, numbers));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
