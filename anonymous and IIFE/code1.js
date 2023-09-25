//  Do the below programs in anonymous function & IIFE

//  1)Print odd numbers in an array using anonymous function


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  };
  
  printOddNumbers(numbers);
   
  
//-------------------------------------------------------------------------------------------------------------------------------
// using IIFE

  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers1);

output:
1
3
5
7
9
