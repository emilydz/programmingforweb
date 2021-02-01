const quiz = [
  { question: 'Who painted The Kiss?', answer: 'Gustav Klimt' },
  { question: 'Who painted The Wounded Deer?', answer: 'Frida Kahlo' },
  { question: 'Who painted Nighthawks?', answer: 'Edward Hopper' },
];

const randInx = Math.round(Math.random() * (quiz.length - 1));
console.log(randInx);

const userAnswer = window.prompt(quiz[randInx].question);
console.log(userAnswer);

window.alert ('You answered ' + userAnswer + '. The correct answer is ' + quiz[randInx].answer + '.');
