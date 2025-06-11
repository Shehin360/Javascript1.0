let newBtn = document.createElement("Button");
newBtn.innerText = "Click me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

let btn = document.querySelector("body").prepend(newBtn);

btn.alert("Hi How are you");
