const regexPattern = /\b[a-z]{1,30}\b/g
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

while (true) {
  let newSentence = ''
  const input = gets();

  if (!input || input === '.') break;
  if (input.length > Math.pow(10, 4)) continue;

  const sentence = input.trim().match(regexPattern)
  const uniqueWords = Array.from(new Set(sentence));
  const words = uniqueWords.map(word => {
  const repeatations = sentence.join(' ').match(new RegExp(`\\b${word}\\b`, 'g')).length;
  const trim = word.length - 2
  const save = trim * repeatations
  const abbreviation = `${word[0]}.`
  const legend = `${abbreviation} = ${word}`
  const regexp = new RegExp(`\\b${word}\\b`, 'g')
  return { word, repeatations, trim, save, abbreviation, legend, regexp }
  }).filter(word => word.save > 0)

  const abbreviations = alphabet.split('').map(letter => {
    candidates = words.filter(word => word.word.match(new RegExp(`\\b${letter}\\w{2,}\\b`, 'g')))

    if (!candidates || candidates === null) return { save: 0 }

    return candidates.reduce((acc, curr) => {
      return curr.save >= acc.save
        ? curr
        : acc

    }, { save: 0 });
  }).filter(el => el.save > 0)

  newSentence = input
  for (const abbr of abbreviations) {
    newSentence = newSentence.replace(abbr.regexp, abbr.abbreviation)
  }

  console.log(newSentence);
  console.log(abbreviations.length);
  abbreviations.sort().map(({ legend }) => console.log(legend))
}
