import { cons } from 'hexlet-pairs';
import { startGame, RandomNumber } from '..';

const rules = 'What is the result of the expression?\n';
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

export default () => startGame(makeTask, rules);
