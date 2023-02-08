
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = matrix ? matrixSort(matrix) : [];
  return result;
}

function matrixSort(m) {
  let arr = [];
  for (let i = 0; i < m.length; i++) {
    for (let k = 0; k < m[i].length; k++) {
      if (i % 2 == 0) {
        arr.push(m[i][k]);
      } else {
        let index = m[i].length - 1 - k;
        console.log(index);
        arr.push(m[i][index])
      }
    }
  }
  return arr;
}