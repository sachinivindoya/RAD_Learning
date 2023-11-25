// function

function findSum(num1: number,num2: number ):number{
    return num2+num1;
 }

 
function findSumInString(num1: number,num2: number ):string{
    return `sum is : ${num1+num2}`;
 }
 
 
 let result1 = findSum(10 ,20);
 console.log(result1);

 
 let result2 = findSumInString(10 ,20);
 console.log(result2);

