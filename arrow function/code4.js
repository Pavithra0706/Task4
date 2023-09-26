//Do the below programs in arrow functions.
// 4) Return all the prime numbers in an array


numberArray=[1,2,3,51,5,7,11,77];

    let n=numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item!==1;

    })
    console.log(`${n}`);