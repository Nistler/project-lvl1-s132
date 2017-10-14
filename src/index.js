import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const stepsToWin = 3;

const startGame = (makeTask, gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  for (let step = 1; step <= stepsToWin; step += 1) {
    const task = makeTask();
    const question = car(task);
    const correctAnswer = cdr(task);
    console.log('\nQuestion: ', question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`"${playerAnswer}" is wrong answer :(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
