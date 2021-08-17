export const copy2D = (array) => {
  let result = [];
  array.forEach((subArray) => {
    result.push(subArray.slice());
  });
  return result;
};

export const set2D = (array, row, col, value) => {
  let arrayCopy = copy2D(array);
  let newRow = arrayCopy[row];
  newRow.splice(col, 1, value);
  arrayCopy.splice(row, 1, newRow);
  return arrayCopy;
};
