import pairs from '@hexlet/pairs';

export const isEven = (number) => number % 2 === 0;

export const getRandomNumber = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomOperator = () => {
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

export const makePairOfNumbers = () => pairs.cons(getRandomNumber(), getRandomNumber());

export const getFirstNumber = (pairsOfNumbers) => pairs.car(pairsOfNumbers);

export const getSecondNumber = (pairsOfNumbers) => pairs.cdr(pairsOfNumbers);

export const makeMathExpression = () => pairs.cons(getRandomOperator(), makePairOfNumbers());

export const getOperatorOfExpression = (expression) => pairs.car(expression);

export const getPairOfNumbers = (expression) => pairs.cdr(expression);

export const solveExpression = (expression) => {
  let result;
  const pairsOfNumbers = getPairOfNumbers(expression);
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

export const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};
