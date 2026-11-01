/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const blocked = new Array(matrix[0].length).fill(false);

  for (const row of matrix) {
    for (let j = 0; j < row.length; j += 1) {
      if (blocked[j]) continue;
      if (row[j] === 0) {
        blocked[j] = true;
      } else {
        sum += row[j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
