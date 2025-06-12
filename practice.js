let mode = document.querySelector("#btn");
let currentMode = "light";
let body = document.querySelector("body");

mode.addEventListener('click', () => {
    if(currentMode === "light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});
