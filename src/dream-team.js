const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = []
  if(!Array.isArray(members)) {
    return false
  }
  members.forEach((item) => {
    if (typeof item === 'string') {
      if (item.slice(0, 1) !== ' ') {
        result.push(item.slice(0, 1))
      } else {
        let nextLetter = item.split('').find(letter => letter !== ' ')
        result.push(nextLetter)
      }
    }
  })
  return result.sort((a, b) => a.localeCompare(b)).join('').toUpperCase()
}

module.exports = {
  createDreamTeam
};
