//Do the below programs in anonymous function & IIFE
// 8) Rotate an array by k times

// Using anonymous function :

  const rotateArray = (arr, k) => {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  console.log("Original Array:", originalArray);
  console.log("Rotated Array:", rotateArray(originalArray, k));


  // Using IIFE 

  const originalArray1 = [1, 2, 3, 4, 5];
  const a = 2;

  const rotatedArray1 = ((arr, a) => {
  a = a % arr.length; 
  return [...arr.slice(-a), ...arr.slice(0, arr.length - a)];
  })(originalArray1, a);

  console.log("Original Array1:", originalArray1);
  console.log("Rotated Array1:", rotatedArray1);



  