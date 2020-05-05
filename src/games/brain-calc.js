import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';


const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const mathOperators = ['+', '-', '*'];
  return mathOperators[Math.floor(Math.random() * mathOperators.length)];
};

const solveExpression = (operator, numbers) => {
  let result;
  switch (operator) {
    case '+':
      result = numbers.reduce((acc, number) => acc + number);
      break;
    case '-':
      result = numbers.reduce((acc, number) => acc - number);
      break;
    case '*':
      result = numbers.reduce((acc, number) => acc * number);
      break;
    default:
      break;
  }
  return result;
};

const getListOfNumbers = (count, listOfNumbers = []) => {
  if (count === 0) return listOfNumbers;
  listOfNumbers.push(getRandomNumber());
  return getListOfNumbers(count - 1, listOfNumbers);
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
  const numbers = getListOfNumbers(countOfNumbers);
  const mathOperator = getRandomOperator();
  const question = makeQuestion(mathOperator, numbers);
  const answer = String(solveExpression(mathOperator, numbers));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
