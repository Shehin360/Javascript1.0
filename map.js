let num = [12,13,14,15,16,17,18,19];

let newarr = num.map((val)=> {
    return(val*val)
});
console.log(newarr);

let evenarr =num.filter((val2) =>
{
    return val2 > 13;
});
console.log(evenarr);