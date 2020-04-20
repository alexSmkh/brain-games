import {
  askQuestion, getUserAnswer, greeting, getUsername, sayHello,
  explainRules, congratulate, sayTryAgain, sayCorrect, sayCorrectAnswer,
} from './conversation.js';
import { isEven, getRandomNumber } from './math-lib.js';
import { cons, car, cdr } from './pairs.js';

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const makeQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber();
  return cons(randomNumber, getCorrectAnswer(randomNumber));
};

const getQuestion = (questionAndAnswer) => car(questionAndAnswer);

const getAnswer = (questionAndAnswer) => cdr(questionAndAnswer);

const isUserAnswerCorrect = (
  questionAndAnswer,
  userAnswer,
) => getAnswer(questionAndAnswer) === userAnswer;

const runGame = (totalScore = 0) => {
  const numberRounds = 3;
  if (totalScore === numberRounds) return true;

  const questionAndAnswer = makeQuestionAndAnswer();
  askQuestion(getQuestion(questionAndAnswer));

  const userAnswer = getUserAnswer();
  const scoreForAnswer = (isUserAnswerCorrect(questionAndAnswer, userAnswer) ? 1 : 0);
  if (!scoreForAnswer) {
    sayCorrectAnswer(userAnswer, getAnswer(questionAndAnswer));
    return false;
  }
  sayCorrect();
  return runGame(totalScore + 1);
};

const startBrainEvenGame = () => {
  greeting();
  const username = getUsername();
  sayHello(username);
  explainRules();

  const gameResult = runGame();
  if (gameResult) congratulate(username);
  else sayTryAgain(username);
};

export default startBrainEvenGame;
