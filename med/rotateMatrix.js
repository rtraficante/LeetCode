/* eslint-disable no-unused-vars */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length / 2; j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[i][matrix[0].length - j - 1];
          matrix[i][matrix[0].length - j - 1] = temp;
      }
  }

};
