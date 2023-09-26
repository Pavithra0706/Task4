// Do the below programs in anonymous function & IIFE
// 5) Return all the palindromes in an array

// Using anonymous function:

const inputArray = ["level", "hello", "civic", "world", "deified"];

const palindromes = inputArray.filter(function(item) {
  return item === item.split('').reverse().join('');
});

console.log(palindromes);


  // Using IIFE

  (function() {
    const inputArray = ["level", "hello", "civic", "world", "deified"];
  
    const palindromes = inputArray.filter(function(item) {
      return item === item.split('').reverse().join('');
    });
  
    console.log(palindromes);
  })();
  