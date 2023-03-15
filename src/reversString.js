// export function sum(a, b) {
//     return a + b;
//   }
  //module.exports = sum;

  export function reversString(str) {
    let result = str.split('').reverse().join('');
    return result
  }
  
  reversString('строка');