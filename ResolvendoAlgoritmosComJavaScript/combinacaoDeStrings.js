const nCases = parseInt(gets());
let output;

for (let i = 1; i <= nCases; i++) {
  output = '';
  [strA, strB] = gets().split(' ');

  const smallestLength = Math.min(strA.length, strB.length);

  for (let j = 0; j < smallestLength; j++) output += `${strA[j]}${strB[j]}`;

  output += strA.length > strB.length
    ? strA.substring(smallestLength)
    : strB.substring(smallestLength);

  console.log(output);
}
