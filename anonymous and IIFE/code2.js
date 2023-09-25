//Do the below programs in anonymous function & IIFE   
// 3) Return all the prime numbers in an array. 

//using anonymous function :

let a=function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1); 
    }
    let em="";
    for(i=0;i<str.length;i++){
        em+=str[i]+" ";
    }
    return em;
  }
  console.log(a("I'm a student. i seeking for a job"));

// using IIFE:

(function(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1); 
  }
  let em="";
  for(i=0;i<str.length;i++){
      em+=str[i]+" ";
  }
  console.log(em);
})
("I'm a student. I seeking for a job");

