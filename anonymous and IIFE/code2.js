/ Do the below programs in anonymous function & IIFE 
// 2) Sum of all numbers in an array. 


const numbers = [1, 2, 3, 4, 5];

const sum = function(arr) {
    return arr.reduce(function(total, num) {
      return total + num;
    }, 0);
  };
  
  console.log(sum(numbers));

  //------------------------------
