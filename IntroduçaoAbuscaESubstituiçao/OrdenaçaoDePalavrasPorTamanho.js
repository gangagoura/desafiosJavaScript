let size = gets();
let line = "";
let worlds = [];
let newLine = "";

if (size <= 50) {
  for (i = 0; i < size; i++) {
    line = gets();
    words = line.split(" ");
    words.sort((a, b) => b.length - a.length || a.localeCompare(b));
    newLine = words.join(" ");
    console.log(newLine);
  }
}
