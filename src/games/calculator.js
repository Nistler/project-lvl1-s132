import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'What is the result of the expression?';
const maxNum = 100;

const makeTask = () => {
  const leftNum = RandomNumber(maxNum);
  const rightNum = RandomNumber(maxNum);
  switch (RandomNumber(3)) {
    case 1:
      return cons(`${leftNum} + ${rightNum}`, `${leftNum + rightNum}`);
    case 2:
      return cons(`${leftNum} - ${rightNum}`, `${leftNum - rightNum}`);
    default:
      return cons(`${leftNum} * ${rightNum}`, `${leftNum * rightNum}`);
  }
};

export default () => startGame(makeTask, gameDescription);
