//Do the below programs in anonymous function & IIFE
// 6)  Return median of two sorted arrays of the same size.

// Using anonymous function:

const median = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    const mid = Math.floor(mergedArray.length / 2);
  
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  };
  
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  console.log("Median:", median(array1, array2));

  
  // Using IIFE 

  const result = (() => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const mergedArray = [...arr1, ...arr2];
    const mid = Math.floor(mergedArray.length / 2);
  
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  })();
  
  console.log("Median:", result);
  