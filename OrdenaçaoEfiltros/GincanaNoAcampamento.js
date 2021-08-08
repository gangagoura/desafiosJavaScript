while (true) {
    let nStudents = parseInt(gets());
  
    if (nStudents === 0) break;
    if (nStudents < 1 || nStudents > 100) {
      continue;
    }
  
    let students = [];
    let i = 0;
  
    while (i < nStudents) {
      let input = gets();
      let [name, value] = input.split(' ');
      
      i++;
  
      if (!(name.match(/^[A-Za-z_]{1,30}$/)) || !(1 <= value && value <= 500)) {
        continue;
      }
      students = [...students, { name, value }]
    }
  
    let winner = whoIsChampion(students);
    console.log(`Vencedor(a): ${winner}`);
  }
  
  function whoIsChampion(group, index = 0, removed = {}) {
    if (group.length === 1) return group[0].name;

    let nextIndex = undefined;
    let studentNumber = parseInt(removed.value) || parseInt(group[index].value);
  
    (studentNumber % 2 === 0) ? studentNumber *= -1 : studentNumber *= 1;
    const indexToRemove = crawlArray(group, index, studentNumber);
  
    [removed] = group.splice(indexToRemove, 1);
  
    if (removed.value % 2 === 0) {
      nextIndex = (indexToRemove > group.length - 1)
        ? 0
        : indexToRemove;
    } else {
      nextIndex = (indexToRemove > group.length - 1)
        ? group.length - 1
        : indexToRemove - 1;
    }
    return whoIsChampion(group, nextIndex, removed);
  }
  
  function crawlArray(array, index, n) {
    return ((index + n) % array.length + array.length) % array.length;
  }
