const question = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + question[index] + "\n> ");
};

const answers = [];

ask();

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < question.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Bacana!

    Você aprendeu:
    ${answers[0]}

    Se aborreceu e o que pode te ajudar:
    ${answers[1]}

    Ficou feliz com:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!

    Volte amanhã para novas reflexões.
  `);
});
