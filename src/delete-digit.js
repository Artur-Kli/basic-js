const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('')
  let result = []
  arr.forEach((elem, index) => {
    arr[index] = ''
    result.push(arr.join(''))
    arr = n.toString().split('')
  })
  return Math.max(...result)
}

module.exports = {
  deleteDigit
};
