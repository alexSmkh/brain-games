import pairs from '@hexlet/pairs';
import {
  getRandomNumber, getFirstNumberOfPair, getSecondNumberOfPair, makePairOfNumbers,
  makeRoundData,
} from '../utils.js';
import runGameEngine from '../index.js';


const gameDescription = 'What is the result of the expression?';

const getPairOfNumbersFromExpression = (expression) => pairs.cdr(expression);

const getOperatorOfExpression = (expression) => pairs.car(expression);

const getRandomOperator = () => {
  let randomOperator;
  switch (getRandomNumber(1, 3)) {
    case 1:
      randomOperator = '+';
      break;
    case 2:
      randomOperator = '-';
      break;
    case 3:
      randomOperator = '*';
      break;
    default:
      break;
  }
  return randomOperator;
};

const solveExpression = (expression) => {
  let result;
  const pairsOfNumbers = getPairOfNumbersFromExpression(expression);
  switch (getOperatorOfExpression(expression)) {
    case '+':
      result = getFirstNumberOfPair(pairsOfNumbers) + getSecondNumberOfPair(pairsOfNumbers);
      break;
    case '-':
      result = getFirstNumberOfPair(pairsOfNumbers) - getSecondNumberOfPair(pairsOfNumbers);
      break;
    case '*':
      result = getFirstNumberOfPair(pairsOfNumbers) * getSecondNumberOfPair(pairsOfNumbers);
      break;
    default:
      break;
  }
  return result;
};

const makeMathExpression = () => pairs.cons(getRandomOperator(), makePairOfNumbers());

const makeQuestionForChallenge = (expression) => {
  const pairsOfNumbers = getPairOfNumbersFromExpression(expression);
  const firstNumber = getFirstNumberOfPair(pairsOfNumbers);
  const secondNumber = getSecondNumberOfPair(pairsOfNumbers);
  const operator = getOperatorOfExpression(expression);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

const getRoundData = () => {
  const mathExpression = makeMathExpression();
  const resultOfExpression = String(solveExpression(mathExpression));
  const questionForChallenge = makeQuestionForChallenge(mathExpression);
  return makeRoundData(questionForChallenge, resultOfExpression);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
