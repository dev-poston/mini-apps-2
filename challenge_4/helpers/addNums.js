module.exports = {
  nums: (field) => {
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === '💣') {
          if (j < 9 && typeof field[i][j + 1] === 'number') {
            field[i][j + 1]++;
          }
          if (j > 0 && typeof field[i][j - 1] === 'number') {
            field[i][j - 1]++;
          }
          if (i > 0 && typeof field[i - 1][j] === 'number') {
            field[i - 1][j]++;
          }
          if (i < 9 && typeof field[i + 1][j] === 'number') {
            field[i + 1][j]++;
          }
          if (i < 9 && j < 9 && typeof field[i + 1][j + 1] === 'number') {
            field[i + 1][j + 1]++;
          }
          if (i > 0 && j > 0 && typeof field[i - 1][j - 1] === 'number') {
            field[i - 1][j - 1]++;
          }
          if (i < 9 && j > 0 && typeof field[i + 1][j - 1] === 'number') {
            field[i + 1][j - 1]++;
          }
          if (i > 0 && j < 9 && typeof field[i - 1][j + 1] === 'number') {
            field[i - 1][j + 1]++;
          }
        }
      }
    }
  }
};