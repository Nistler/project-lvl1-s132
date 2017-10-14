import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'Balance the given number.';
const maxNum = 999;

const summing = (number, length) => {
  let sum = 0;
  for (let i = 0; i < length; i += 1) {
    sum += Number(String(number)[i]);
  }
  return sum;
};

// Балансировка числа итерационным процессом
const iterBalance = (sumOfDigits, length, balanced) => {
  if (length === 0) return Number(balanced);
  const digit = Math.floor(sumOfDigits / length);
  const newSumOfDigits = sumOfDigits - digit;
  const newLength = length - 1;
  const newBalanced = String(balanced) + String(digit);
  return iterBalance(newSumOfDigits, newLength, newBalanced);
};

// Создание сбалансированного числа
const makeBalanced = (num) => {
  const fullLength = String(num).length;
  const sumOfDig = summing(num, fullLength);
  return iterBalance(sumOfDig, fullLength, '');
};

// Генерация задачи
const makeTask = () => {
  const question = RandomNumber(maxNum);
  const answer = makeBalanced(question);
  return cons(question, `${answer}`);
};

export default () => startGame(makeTask, gameDescription);
