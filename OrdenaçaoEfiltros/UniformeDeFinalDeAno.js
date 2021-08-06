const nUniformes = parseInt(gets());
let alunos = [];

while (true) {
  let nome = gets();

  if (parseInt(nome) === 0) break;
  let [cor, tamanho] = gets().split(' ');

  alunos = [...alunos, { nome, cor, tamanho }]
}

alunos
  .sort((a, b) => {
    for (let [testCase, sortCase] of [
      [a.cor > b.cor, 1],
      [a.cor < b.cor, -1],
      [a.tamanho > b.tamanho, -1],
      [a.tamanho < b.tamanho, 1],
      [a.nome > b.nome, 1],
      [a.nome < b.nome, -1],
    ]) {
      if (testCase) return sortCase;
    }
  })

alunos.map(({ nome, cor, tamanho }) => {
  console.log(`${cor} ${tamanho} ${nome}`);
})
