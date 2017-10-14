import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'Answer "yes" if number prime otherwise answer "no"';
const maxNum = 100;

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeTask = () => {
  const question = RandomNumber(maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(makeTask, gameDescription);
