const nCasos = parseInt(gets());
let saida = [];

for (let i = 0; i < nCasos; i++) {
  let comprasUnicas = new Set(gets().split(' ').sort())
  
  saida[i] = Array.from(comprasUnicas).join(' ')
}

saida.map((lista) => console.log(lista))
