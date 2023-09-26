//Do the below programs in anonymous function & IIFE
// 7) Remove duplicates from an array

// Using anonymous function :
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
  };
  
  const array = [1, 2, 2, 3, 4, 4, 5];
  const result = removeDuplicates(array);
  console.log("Array without duplicates:", result);
  

  //using IIFE
  const result1 = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log("Array without duplicates:", result1);
  