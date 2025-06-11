let newBtn = document.createElement("Button");
newBtn.innerText = "Click me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);

//new

let para =document.querySelector("p");

//para.setAttribute("class","newClass");
para.classList.add("newClass");
