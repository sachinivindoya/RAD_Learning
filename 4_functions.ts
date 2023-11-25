// function

function findSum(num1: number,num2: number ):number{
    return num2+num1;
 }

 
function findSumInString(num1: number,num2: number ):string{
    return `sum is : ${num1+num2}`;
 }
 
 
 let result1 = findSum(10 ,20);
 console.log(result1);

 //-----------------------------------------------------------------------------
 
 let result2 = findSumInString(10 ,20);
 console.log(result2);

 function findTheS(num1: number | string, num2: number | string): number{
    if(typeof num1=== 'string' || typeof num2==='string'){ // type guard
        return +num1 + +num2;
    }else{
        return num1+num2;
    }
    
    }
    
    let result4 = findTheS(10,30);
    console.log("result4 :",result4);
//------------------------------------------------------------------------------


    function findTheSum(num1: number | string, num2: number | string): number | string{
        if(typeof num1=== 'string' || typeof num2==='string'){ 
            return +num1 + +num2;
        }else{
            return num1+num2;
        }
        
        }
        
        let result5 = findTheSum(10,50);
        console.log("result5 :",result5);

        //------------------------------------------------------------