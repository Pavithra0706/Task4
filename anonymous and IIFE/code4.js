//Do the below programs in anonymous function & IIFE    
// 4) Return all the prime numbers in an array

// using anonymous function:

var prime=function(a)
{
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
}
([1,2,3,4,5,6,7,8,9,11]);


//--------------------------------------------------------------------
// Using IIFE

(function(a){
    var  res="";
    for(i=0;i<a.length;i++){
        flag=0;
        for(j=1;j<=a[i];j++){
            
            if(a[i]%j===0){
                flag++;
            }
            
        }
            
        if(flag==2){
                res+=a[i]+" ";
            
        }
    }
    console.log(res);
 
})
([1,2,3,4,5,6,7,8,9,11]);
