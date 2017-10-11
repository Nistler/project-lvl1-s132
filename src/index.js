import readlineSync from 'readline-sync';

const startEven = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  for (let i = 0; i < 3; i += 1) {
    const question = Math.round(1 + (Math.random() * 100));
    console.log('\nQuestion: ', question);
    const controlAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (controlAnswer !== answer) {
      console.log(`${answer} is wrong answer :(. Correct answer was ${controlAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};
export default startEven;
