export const copy2D = (array) => {
  let result = [];
  array.forEach((subArray) => {
    result.push(subArray.slice());
  });
  return result;
};
