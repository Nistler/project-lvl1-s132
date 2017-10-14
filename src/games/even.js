import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';
const maxNum = 100;

const makeTask = () => {
  const question = RandomNumber(maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(makeTask, gameDescription);
