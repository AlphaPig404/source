/**
 * Merge objects using descriptors
 */
var merge = require('../lib/merge-descriptors')

var thing = {
  get name() {
    return 'jon'
  }
}
 
var animal = {
  name: 'pig'
}


// merge(animal, thing)
// console.log(animal.name === 'jon')

merge(animal, thing ,false)

console.log(animal.name === 'jon')