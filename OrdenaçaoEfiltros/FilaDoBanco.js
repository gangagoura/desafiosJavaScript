const nCasos = parseInt(gets());
let nClientes = [];
let senhas = [];

for (let n = 0; n < nCasos; n++) {
  nClientes[n] = parseInt(gets());
  senhas[n] = gets().split(' ');

  let senhasOrdenadas = Array.from(senhas[n]).sort((a, b) => b - a);
  let contadorSemTroca = 0;
  
  for (let i = 0; i < senhas[n].length; i++) {
    senhas[n][i] === senhasOrdenadas[i] && (contadorSemTroca++);
  }
  console.log(contadorSemTroca);
}
