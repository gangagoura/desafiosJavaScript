let m, cards;
let n = 1;

while (true) {
  n = parseInt(gets());

  if (n <= 0) break;

  m = new Map();
  cards = Array.from(new Array(3)).map(v => new Array(n));

  for (let i = 0; i < n; i++) {
    [cards[0][i], cards[1][i], cards[2][i]] = gets().match(new RegExp(/\d+/, 'g')).map(v => parseInt(v));
  }
  console.log(canWinWith(0, 0, 0) ? 1 : 0);
}

function canWinWith(a, b, c) {
  let s = '';

  s = s.concat(a + '0');
  s = s.concat(b + '0');
  s = s.concat(c + '0');

  if (a === b && b === c && c === n) {
    m.set(s, 1);
    return true;
  }

  let x = m.get(s);

  if (x > 0) {
    return x === 1 ? true : false;
  }

  if (a < n && cards[0][a] % 3 === 0 && canWinWith(a + 1, b, c)) {
    m.set(s, 1);
    return true;
  }

  if (b < n && cards[1][b] % 3 === 0 && canWinWith(a, b + 1, c)) {
    m.set(s, 1);
    return true;
  }

  if (c < n && cards[2][c] % 3 === 0 && canWinWith(a, b, c + 1)) {
    m.set(s, 1);
    return true;
  }

  if (a < n && b < n && (cards[0][a] + cards[1][b]) % 3 == 0 && canWinWith(a + 1, b + 1, c)) {
    m[s] = 1;
    return true;
  }

  if (a < n && c < n && (cards[0][a] + cards[2][c]) % 3 == 0 && canWinWith(a + 1, b, c + 1)) {
    m.set(s, 1);
    return true;
  }
  
  if (b < n && c < n && (cards[1][b] + cards[2][c]) % 3 == 0 && canWinWith(a, b + 1, c + 1)) {
    m.set(s, 1);
    return true;
  }

  if (a < n && b < n && c < n && (cards[0][a] + cards[1][b] + cards[2][c]) % 3 == 0 && canWinWith(a + 1, b + 1, c + 1)) {
    m.set(s, 1);
    return true;
  }

  m.set(s, 2);
  return false;
}
