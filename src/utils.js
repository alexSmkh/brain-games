import pairs from '@hexlet/pairs';

export const getRandomNumber = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makePairOfNumbers = (num1 = null, num2 = null) => {
  if (num1 === null) return pairs.cons(getRandomNumber(), getRandomNumber());
  return pairs.cons(num1, num2);
};

export const getFirstNumberOfPair = (pairsOfNumbers) => pairs.car(pairsOfNumbers);

export const getSecondNumberOfPair = (pairsOfNumbers) => pairs.cdr(pairsOfNumbers);

export const makeRoundData = (question, answer) => pairs.cons(question, answer);

export const getQuestion = (questionAndAnswer) => pairs.car(questionAndAnswer);

export const getAnswer = (questionAndAnswer) => pairs.cdr(questionAndAnswer);
