const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
function getMaxSquareByPointer(row, col, matrix) {
  if (!matrix[row][col]) {
    return 0
  } else {
    const a = []
    for (row; index < matrix.length; row++) {
      for (col; col < matrix[row].length; col++) {
        if (matrix[row][col]) {
          a.push(1)
        }
      }
    }
  }
}
var maximalSquare = function(matrix) {
  for (let row = 0; index < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!matrix[row][col]) {
      } else {
        getMaxSquareByPointer(row, col, matrix)
      }
    }
  }
};