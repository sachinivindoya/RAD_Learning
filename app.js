// function
function findSum(num1, num2) {
    return num2 + num1;
}
function findSumInString(num1, num2) {
    return "sum is : ".concat(num1 + num2);
}
var result1 = findSum(10, 20);
console.log(result1);
var result2 = findSumInString(10, 20);
console.log(result2);
