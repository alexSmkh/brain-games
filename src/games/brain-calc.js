import pairs from '@hexlet/pairs';
import { getRandomNumber, getRandomOperator } from '../math-lib.js';

export const getBrainCalcRules = () => 'What is the result of the expression?';

const makePairOfNumbers = () => pairs.cons(getRandomNumber(), getRandomNumber());

const makeMathExpression = () => pairs.cons(getRandomOperator(), makePairOfNumbers());

const getOperatorOfExpression = (expression) => pairs.car(expression);

const getPairsOfNumbers = (expression) => pairs.cdr(expression);

const getFirstNumber = (pairsOfNumbers) => pairs.car(pairsOfNumbers);

const getSecondNumber = (pairsOfNumbers) => pairs.cdr(pairsOfNumbers);

const solveExpression = (expression) => {
  let result;
  const pairsOfNumbers = getPairsOfNumbers(expression);
  switch (getOperatorOfExpression(expression)) {
    case '+':
      result = getFirstNumber(pairsOfNumbers) + getSecondNumber(pairsOfNumbers);
      break;
    case '-':
      result = getFirstNumber(pairsOfNumbers) - getSecondNumber(pairsOfNumbers);
      break;
    case '*':
      result = getFirstNumber(pairsOfNumbers) * getSecondNumber(pairsOfNumbers);
      break;
    default:
      break;
  }
  return result;
};

const makeQuestionForChallenge = (expression) => {
  const pairsOfNumbers = getPairsOfNumbers(expression);
  const firstNumber = getFirstNumber(pairsOfNumbers);
  const secondNumber = getSecondNumber(pairsOfNumbers);
  const operator = getOperatorOfExpression(expression);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

export const getBrainCalcChallenge = () => {
  const mathExpression = makeMathExpression();
  const resultOfExpression = solveExpression(mathExpression);
  const questionForChallenge = makeQuestionForChallenge(mathExpression);
  return pairs.cons(questionForChallenge, resultOfExpression);
};
