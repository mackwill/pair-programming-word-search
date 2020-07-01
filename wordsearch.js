const switchRowColumns = (arrayToChange) => {
  let verticalJoin = [];
  for (let i = 0; i < arrayToChange.length; i++) {
    for (let j = 0; j < arrayToChange[i].length; j++) {
      if (!verticalJoin[j]) {
        verticalJoin.push([]);
      }
      verticalJoin[j][i] = arrayToChange[i][j];
    }
  }
  return verticalJoin;
};

const checkMatchingWord = (arrayToSearch, word) => {
  for (l of arrayToSearch) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

const reduceArrayTo1D = (letters) => {
  return letters.map((ls) => {
    return ls.join("");
  });
};

const wordSearch = (letters, word) => {
  const horizontalJoin = reduceArrayTo1D(letters);

  let verticalJoin = [];

  verticalJoin = switchRowColumns(horizontalJoin);
  verticalJoin = reduceArrayTo1D(verticalJoin);

  if (
    checkMatchingWord(horizontalJoin, word) ||
    checkMatchingWord(verticalJoin, word)
  ) {
    return true;
  }
  return false;
};
module.exports = wordSearch;
