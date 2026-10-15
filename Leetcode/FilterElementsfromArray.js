/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// 2634. Filter Elements from Array

var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
