export const copy2D = (array: any[][]) => {
  let result: any[][] = [];
  array.forEach((subArray) => {
    result.push(subArray.slice());
  });
  return result;
};

export const set2D = (array: any[][], row: number, col: any, value: any) => {
  let arrayCopy = copy2D(array);
  let newRow = arrayCopy[row];
  newRow.splice(col, 1, value);
  arrayCopy.splice(row, 1, newRow);
  return arrayCopy;
};
