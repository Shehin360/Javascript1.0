let btn = document.getElementById('btn');
btn.addEventListener('click', (evt)=>{
    console.log("button1 was clicked - handler1");
    //console.log(evt);
});

btn.addEventListener('click', ()=>{
    console.log("button1 was clicked - handler2");
});

 

btn.addEventListener('click', ()=>{
    console.log("button1 was clicked - handler4");
});

const handler3 =()=>{
    console.log("button1 was clicked - handler3");
}

btn.addEventListener('click',handler3);

btn.removeEventListener('click',handler3);