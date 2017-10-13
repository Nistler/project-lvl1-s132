import { cons } from 'hexlet-pairs';
import { startGame, RandomNumber } from '..';

const isEven = number => number % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no"\n';
const maxNum = 100;

const makeTask = () => {
  const question = RandomNumber(maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(makeTask, rules);
