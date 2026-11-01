const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const result = [];
  let skipNext = false;
  let doubleNext = false;
  let prevExists = false;

  for (let i = 0; i < arr.length; i++) {
    const item =  arr[i];

    if (item === '--discard-next') { skipNext = true; continue; }
    if (item === '--double-next') {doubleNext = true; continue; }
    if (item === '--discard-prev') {
      if (prevExists) { result.pop(); prevExists = false; }
      continue;
    }
    if (item === '--double-prev') {
      if (prevExists) { result.push(result[result.length - 1]); }
      continue;
    }

    if (skipNext) { skipNext = false; prevExists = false; continue; }
    if (doubleNext) {doubleNext = false; result.push(item, item); }
    else { result.push(item); }
    prevExists = true;
  }

  return result;
}

module.exports = {
  transform
};
