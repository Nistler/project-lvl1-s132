import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;

const findMaxDiv = (n1, n2) => {
  if (n2 === 0) return n1;
  return findMaxDiv(n2, n1 % n2);
};

const makeTask = () => {
  const firstNum = RandomNumber(maxNum);
  const secondNum = RandomNumber(maxNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findMaxDiv(firstNum, secondNum));
  return cons(question, answer);
};

export default () => startGame(makeTask, gameDescription);
