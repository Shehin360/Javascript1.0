let marks =[85,97,44,37,76,60];

let len = marks.length;
let sum=0;

for(let i of marks){

    sum =sum+i;

}
let avg = sum/len;
console.log(`The average mark is = ${avg}`);
