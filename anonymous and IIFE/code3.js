// Do the below programs in anonymous function & IIFE 
// 2) Sum of all numbers in an array. 


const numbers = [1, 2, 3, 4, 5];

const sum = function(arr) {
    return arr.reduce(function(total, num) {
      return total + num;
    }, 0);
  };
  
  console.log(sum(numbers));

  //--------------------------------------------------------------
  // Using IIFE 

const numbers1 = [1, 2, 3, 4, 5];

const sum1= (function(arr) {
  return arr.reduce((total, num) => total + num, 0);
})(numbers1);

console.log(sum1);

output:
15
  
