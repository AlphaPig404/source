import getTag from './.internal/getTag.js'

/**
 * Checks if 'value' if classfied as a 'Symbol' primitive or object
 * 
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check
 * @return {boolean} Returns 'true' if 'value' is a symbol,else 'false'
 * @example
 * 
 * isSymbol(Symbol.iterator)
 * // =>true
 * 
 * isSymbol('abc')
 * // => false
 */

 function isSymbol(value){
   const type = typeof value
   return (type == 'object' && value != null && getTag(value) == '[object Symbol]')
 }

 export default isSymbol