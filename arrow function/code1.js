//Do the below programs in arrow functions.
// 1) Print odd numbers in an array


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var printOddNumbers = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumbers(numbers);
