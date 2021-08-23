module.exports = {
  dig: (x, y, field, callback) => {
    let inner = (x, y, field, callback) => {
      if (field[x][y] === 0) {
        field[x][y] = '⛏️';
        if (y < 9 && field[x][y + 1] > 0) {
          field[x][y + 1] = 'hit';
        }
        if (y > 0 && field[x][y - 1] > 0) {
          field[x][y - 1] = 'hit';
        }
        if (x > 0 && field[x - 1][y] > 0) {
          field[x - 1][y] = 'hit';
        }
        if (x < 9 && field[x + 1][y] > 0) {
          field[x + 1][y] = 'hit';
        }
        if (x < 9 && y < 9 && field[x + 1][y + 1] > 0) {
          field[x + 1][y + 1] = 'hit';
        }
        if (x > 0 && y > 0 && field[x - 1][y - 1] > 0) {
          field[x - 1][y - 1] = 'hit';
        }
        if (x < 9 && y > 0 && field[x + 1][y - 1] > 0) {
          field[x + 1][y - 1] = 'hit';
        }
        if (x > 0 && y < 9 && field[x - 1][y + 1] > 0) {
          field[x - 1][y + 1] = 'hit';
        }
      }
      if (y < 9 && field[x][y + 1] === 0) {
        inner(x, y + 1, field, callback)
      }
      if (y > 0 && field[x][y - 1] === 0) {
        inner(x, y - 1, field, callback);
      }
      if (x > 0 && field[x - 1][y] === 0) {
        inner(x - 1, y, field, callback);
      }
      if (x < 9 && field[x + 1][y] === 0) {
        inner(x + 1, y, field, callback);
      }
        // if (x < 9 && y < 9 && field[x + 1][y + 1] === 0) {
        //   field[i + 1][j + 1] = '⛏️';
        // }
        // if (i > 0 && j > 0 && field[i - 1][j - 1] === 0) {
        //   field[i - 1][j - 1] = '⛏️';
        // }
        // if (i < 9 && j > 0 && field[i + 1][j - 1] === 0) {
        //   field[i + 1][j - 1] = '⛏️';
        // }
        // if (i > 0 && j < 9 && field[i - 1][j + 1] === 0) {
        //   field[i - 1][j + 1] = '⛏️';
        // }
    }
    inner(x, y, field, callback);
    callback(field);
  }
}