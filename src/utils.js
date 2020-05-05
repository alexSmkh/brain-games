import pairs from '@hexlet/pairs';

export const getRandomNumber = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min + 1)) + min;

export const makeRoundData = (question, answer) => pairs.cons(question, answer);

export const getQuestion = (questionAndAnswer) => pairs.car(questionAndAnswer);

export const getAnswer = (questionAndAnswer) => pairs.cdr(questionAndAnswer);
