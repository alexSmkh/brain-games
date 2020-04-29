import pairs from '@hexlet/pairs';
import {
  getPairOfNumbers, getFirstNumber, getSecondNumber, getOperatorOfExpression,
  makeMathExpression, solveExpression,
} from '../math-lib.js';
import main from '../index.js';

const makeQuestionForChallenge = (expression) => {
  const pairsOfNumbers = getPairOfNumbers(expression);
  const firstNumber = getFirstNumber(pairsOfNumbers);
  const secondNumber = getSecondNumber(pairsOfNumbers);
  const operator = getOperatorOfExpression(expression);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

const makeBrainCalcChallenge = () => {
  const mathExpression = makeMathExpression();
  const resultOfExpression = solveExpression(mathExpression);
  const questionForChallenge = makeQuestionForChallenge(mathExpression);
  return pairs.cons(questionForChallenge, resultOfExpression);
};

export default () => {
  const gameRules = 'What is the result of the expression?';
  main(makeBrainCalcChallenge, gameRules);
};
