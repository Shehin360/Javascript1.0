let access = document.querySelector("h2");

console.dir(access.innerText);

access.innerText += " from apna college students";

let divs =document.querySelectorAll(".b1");

let i=1;
for ( let div of divs){
    div.innerText = `new unique value ${i}`;
    i++

}

//divs[0].innerText="new unique value one";
//divs[1].innerText="new unique value two";
//divs[2].innerText="new unique value three";