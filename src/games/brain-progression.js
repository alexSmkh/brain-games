import pairs from '@hexlet/pairs';
import { getRandomNumber, makeRoundData } from '../utils.js';
import runGameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (progression, step, length = 10) => {
  if (length === 0) return progression;
  if (!pairs.isPair(progression)) {
    return makeProgression(
      pairs.cons(progression, progression + step),
      step,
      length - 1,
    );
  }
  return makeProgression(
    pairs.cons(progression, pairs.cdr(progression) + step),
    step,
    length - 1,
  );
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

const getRoundData = () => {
  const randomPosition = getRandomNumber(1, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const firstElementOfProgression = getRandomNumber();
  const progression = makeProgression(firstElementOfProgression, stepOfProgression);
  const question = makeQuestion(progression, randomPosition);
  const answer = String(getAnswer(progression, randomPosition));
  return makeRoundData(question, answer);
};

export default () => {
  runGameEngine(getRoundData, gameDescription);
};
