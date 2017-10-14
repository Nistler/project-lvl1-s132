import { cons } from 'hexlet-pairs';
import RandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'What number is missing in this progression?';
const maxStartNum = 50;
const maxStep = 5;
const progressionLength = 10;

// Генерация прогрессии
const makeProgresson = (startNum, step) => {
  const progression = [String(startNum)];
  let nextStep = startNum + step;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(nextStep);
    nextStep += step;
  }
  return progression;
};

// Обработка прогрессии для вопроса
const makeNewProgression = (Progression, missingPos) => {
  let newProgression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingPos) newProgression += '..';
    else newProgression += Progression[i];
    if (i < 9) newProgression += ' ';
  }
  return newProgression;
};

// Генерация задачи
const makeTask = () => {
  const startNum = RandomNumber(maxStartNum);
  const Step = RandomNumber(maxStep);
  const progression = makeProgresson(startNum, Step);
  const randomMissingPosition = RandomNumber(progressionLength);
  const answer = String(progression[randomMissingPosition]);
  const question = makeNewProgression(progression, randomMissingPosition);
  return cons(question, answer);
};

export default () => startGame(makeTask, gameDescription);
