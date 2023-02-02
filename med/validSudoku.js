/* eslint-disable no-unused-vars */
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const rowSeen = new Set();
    const colSeen = new Set();
    const sqrSeen = new Set();

    for (let j = 0; j < board.length; j++) {
      const rowCheck = board[i][j];
      const colCheck = board[j][i];

      const sqrX = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const sqrY = (i % 3) * 3 + (j % 3);
      const sqrCheck = board[sqrX][sqrY];

      if (
        rowSeen.has(rowCheck) ||
        colSeen.has(colCheck) ||
        sqrSeen.has(sqrCheck)
      ) {
        return false;
      }

      if (rowCheck !== ".") rowSeen.add(rowCheck);
      if (colCheck !== ".") colSeen.add(colCheck);
      if (sqrCheck !== ".") sqrSeen.add(sqrCheck);
    }
  }
  return true;
};
