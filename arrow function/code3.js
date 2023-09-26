// Do the below programs in arrow functions

// c) Sum of all numbers in an array

let n=[1,2,3,4,5];

let sum=n.reduce((pre,curr) => {
    return pre+curr;
})
console.log(sum);

