let n= prompt("Enter a number :");

let arr = [];

for(let i=1;i<=n;i++){
    arr[i-1]=i;

}
console.log(arr);

let sum= arr.reduce((previous,current)=>{
    return previous+current;
});
console.log("sum :",sum);

let product= arr.reduce((previous,current)=>{
    return previous * current;
});
console.log("Factorial :",product);