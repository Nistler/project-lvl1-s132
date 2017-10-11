import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

export const startEven = () => {
  const name = getName(); 
  let q = null;
  let a = null;
  const wrA = (ans) => {
    const rev = (ans === 'yes') ? 'no' : 'yes';
    console.log(`'${ans}' is wrong answer :(. Correct answer was '${rev}'.`);
    console.log(`Let's try again, ${name}!`);
  };
  for (let i = 0; i < 3; i += 1) {
    q = Math.round(1 + (Math.random() * 100));
    console.log('Question: ', q);
    a = readlineSync.question('Your answer: ');
    if (q % 2 === 0 && a !== 'yes') return wrA(a);
    else if (q % 2 !== 0 && a !== 'no') return wrA(a);
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}`);
};
