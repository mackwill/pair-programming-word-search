const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => {
    return ls.join("");
  });
  let verticalJoin = [];
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let i = 0; i < horizontalJoin.length; i++) {
    for (let j = 0; j < horizontalJoin[i].length; j++) {
      if (!verticalJoin[j]) {
        verticalJoin.push([]);
      }
      verticalJoin[j][i] = horizontalJoin[i][j];
    }
  }
  verticalJoin = verticalJoin.map((v) => {
    return v.join("");
  });
  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;
