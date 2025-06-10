let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

let first =arr.shift();
//1
console.log("Deleted element is ",first);
//2
let second =arr.splice(1,1,"ola");
console.log("replaced ",second);
//3
let three = arr.push("Amazon");
console.log("Added new company ",three);

console.log("the new array values are : ",arr);