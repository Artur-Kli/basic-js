const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(value) {
    this.chains.push(`( ${value} )`)
    if (value === undefined) {
      this.chains.push(`( )`)
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position%1 !== 0 || position <= 0 || position > this.chains.length) {
      this.chains = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chains = this.chains.slice(0, position - 1).concat(this.chains.slice(position))
    }
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let result = this.chains.join('~~')
    this.chains = []
    return result
  }
};

module.exports = {
  chainMaker
};
