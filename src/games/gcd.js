import { cons } from 'hexlet-pairs';
import { startGame, RandomNumber } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';
const maxNum = 100;

const findMaxDiv = (n1, n2) => {
  if (n2 === 0) return n1;
  return findMaxDiv(n2, n1 % n2);
};

const makeTask = () => {
  const firstNum = RandomNumber(maxNum);
  const secondNum = RandomNumber(maxNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = findMaxDiv(firstNum, secondNum);
  return cons(question, `${answer}`);
};

export default () => startGame(makeTask, rules);
