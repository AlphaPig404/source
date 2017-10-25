import isSymbol from '../isSymbol.js'

/**
 * Used as reference for various 'Number' constants
 * 用作各种“数字”常量的引用
 */
const NAN = 0/0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * “toNumber”的基本实现
 * 不保证二进制、十六进制或八进制字符串值的转换的准确性
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */

 function baseToNunber(value){
   if(typeof value == 'number'){
     return value
   }

   if(isSymbol(value)){
     return NAN
   }

   return +value // 直接使用+对字符串进行转义
 }

 export default baseToNunber
