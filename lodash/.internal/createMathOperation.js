import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values
 * 
 * @private
 * @param {Function} operator The function to perform the operation
 * @param {number} [defaultValue] The value used for 'undefined' arguments
 * @return {Function} Returns the new mathemtical operation function
 * 
 */

 function createMathOperation(operator , defaultValue){
   return (value,other)=>{
     let result

     if(value === undefined&&other===undefined){
       // 不传参数时返回默认值
       return defaultValue
     }

     if(value !== undefined){
       // 只有一个参数时，直接返回该参数
       result = value
     }
     if(other !== undefined){
       if(result === undefined){
         return other
       }
       if(typeof value == 'string' || typeof other == 'string'){
         value = baseToString(value)
         other = baseToString(other)
       }else{
         value = baseToNumber(value)
         other = baseToNumber(other)
       }

       result = operator(value,other)
     }
     return result
   }
 }

 export default createMathOperation