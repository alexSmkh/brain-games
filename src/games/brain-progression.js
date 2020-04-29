import pairs from '@hexlet/pairs';
import { getRandomNumber, makeChallenge } from '../utils.js';
import main from '../index.js';

export const makeProgression = (start, step, length = 10) => {
  if (length === 0) return start;
  if (!pairs.isPair(start)) {
    return makeProgression(pairs.cons(start, start + step), step, length - 1);
  }
  return makeProgression(pairs.cons(start, pairs.cdr(start) + step), step, length - 1);
};

const makeQuestion = (progression, position, quest = '', length = 10) => {
  if (length === 0) return quest;
  if (length === position) return makeQuestion(pairs.car(progression), position, `.. ${quest}`, length - 1);
  return makeQuestion(pairs.car(progression), position, `${pairs.cdr(progression)} ${quest}`, length - 1);
};

const getAnswer = (progression, position, length = 10) => {
  if (length === position) return pairs.cdr(progression);
  return getAnswer(pairs.car(progression), position, length - 1);
};

export const makeBrainProgressionChallenge = () => {
  const randomPosition = getRandomNumber(1, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const firstElementOfProgression = getRandomNumber();
  const progression = makeProgression(firstElementOfProgression, stepOfProgression);
  const question = makeQuestion(progression, randomPosition);
  const answer = getAnswer(progression, randomPosition);
  return makeChallenge(question, answer);
};

export default () => {
  const gameRules = 'What number is missing in the progression?';
  main(makeBrainProgressionChallenge, gameRules);
};
