let counter = 0;    


const value = document.getElementById('counter-value');
const increment = document.getElementById('inecrement-btn');
const decrement = document.getElementById('decrement-btn');
const reset = document.querySelector('#reset-btn');


increment.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
});

decrement.addEventListener('click', () => {
    counter--;
    value.innerText = counter;
});

reset.addEventListener('click', () => {
    counter = 0;
    value.innerText = counter;
});



function flip(){
    let red   = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);   
    let blue  = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("colorFlipper").style.backgroundColor = color;
}