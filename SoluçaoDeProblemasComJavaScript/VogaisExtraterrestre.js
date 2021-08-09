let alienVowels = ''
let sentence = ''
const notInAlphabet = /[^A-Za-z0-9 ]/g

while (true) {
  alienVowels = gets()
  
  if (!alienVowels || alienVowels === '') break;
  alienVowels = alienVowels.replace(/ /g, '')
  sentence = gets()

  if (notInAlphabet.test(alienVowels) || notInAlphabet.test(sentence)) continue;
  console.log(count(alienVowels, sentence))
}

function count(substr, str) {
  return substr.split('').reduce((acc, character) => {
    acc += (str || '').match(new RegExp(`${character}`, 'g'))?.length || 0
    return acc
  }, 0)
}
