const regexLine = /[A-Z]/g
let nCase = parseInt(gets());
let L = 0;
let value;
let lines;

while (nCase > 0) {
  nCase--
  lines = []
  value = 0
  L = parseInt(gets());

  if (L < 1 || L > 100) {
    for (let i = 0; i < L; i++) {
      gets();
    }
    continue;
  }

  for (let i = 0; i < L; i++) {
    lines = [...lines, gets()]
  }

  for (const [i, line] of lines.entries()) {
    value += line.match(regexLine).slice(0, 50).reduce((acc, curr, elementPosition, array) => {
      const alphabetPosition = parseInt(curr, 36) - 10;
      const elementInput = i;

      return acc + alphabetPosition + elementInput + elementPosition
    }, 0)
  }

  console.log(value);
}
