let btn = document.getElementById('btn');

btn.onclick = () =>{
    console.log('Button clicked!');
    let a = 25;
    a++;
    console.log('Value of a:', a);

};

let btn2 = document.querySelector('#btn2');

btn2.onclick = () => {
    console.log('Button 2 clicked!');
    let b = 50;
    b += 10;
    console.log('Value of b:', b);
};

let div = document.querySelector('div');

div.onmouseover = () => {
    console.log('Mouse over the div!');

};
//new event

btn.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);

};