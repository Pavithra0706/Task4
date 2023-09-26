//Do the below programs in arrow functions
//5) Return all the palindromes in an array

let array= [505, 777, 505, 278, 323, 889, 707, 193]

    let palindromes=array.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    })
    console.log(palindromes);
