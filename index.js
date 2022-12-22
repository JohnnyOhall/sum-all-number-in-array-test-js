const sumItems = array => {
  const flatArray = flatten(array), end = flatArray.length - 1;
  let total = 0, start = 0;

  const count = (array, start, end) => {
    total += array[start];
    return start !== end &&
      (start++, count(array, start, end));
  };

  count(flatArray, start, end);

  return total;
};


const flatten = array => {
  const output = [];

  const checkForArray = input => {
    return input.forEach(x =>
      Array.isArray(x) ?
        checkForArray(x) :
        output.push(x));
  };

  checkForArray(array);

  return output;
};


module.exports = sumItems;