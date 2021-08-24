let input;
const limit = Math.pow(10, 5);
let T, X, R;
var output = '';

const operation = {
  '1': function fillLine(matrix, line, num) {
    for (let index = 0; index < matrix.length; index++) {
      matrix[line - 1][index] = num;
    }
  },
  '2': function fillColumn(matrix, col, num) {
    for (let index = 0; index < matrix.length; index++) {
      matrix[index][col - 1] = num;
    }
  },
  '3': function showMostFrequentAtLine(matrix, line) {
    const lineValues = matrix[line - 1]

    output += getMostFrequentIn(lineValues) + '\n'
  },
  '4': function showMostFrequentAtColumn(matrix, col) {
    const columnValues = matrix.map(line => line[col - 1])

    output += getMostFrequentIn(columnValues) + '\n'
  }
}

const getMostFrequentIn = (values) => {
  let n = values.length;

  if (n == 0) return null;
  let map = {}, most = values[0], freqCount = 1;

  for (let i = 0; i < n; i++) {
    let el = values[i];

    if (map[el] == null)
      map[el] = 1;
    else
      map[el]++;

    if (map[el] > freqCount) {
      most = el;
      freqCount = map[el];
    } else if (map[el] === freqCount) {
      most = Math.max(most, el)
    }
  }
  return most;
}

while (true) {
  input = gets()

  if (!input || input === '') break;

  let [N, Q] = input.match(/\d+/g);
  N = parseInt(N);
  Q = parseInt(Q);

  if (N < 1 || N > limit || Q < 1 || N > limit) break;

  let matrix = Array.from(Array(parseInt(N)), () => new Array(parseInt(N)).fill(0));

  for (let index = 0; index < Q; index++) {
    let [T, X, R] = gets().split(/[ ]+/g)
    X = parseInt(X)
    R = parseInt(R)

    if (/[12]/.test(T)) {
      if (X < 1 || X > N || R < 0 || R > 50) {
        continue;
      }
    }

    if (/[34]/.test(T)) {
      if (X > N || X < 0) {
        continue;
      }
    }
    operation[T](matrix, X, R);
  }
  console.log(output);
}
