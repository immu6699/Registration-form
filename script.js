
const a_color = "white";
const b_color = "green";
const c_color = "grey";

const a_number = 10;
const b_number = 35;
const c_number = 30;


const boxA = document.getElementById('boxA');
const boxB = document.getElementById('boxB');
const boxC = document.getElementById('boxC');


boxA.innerHTML = `a = ${a_number}`;
boxA.style.color = a_color;

boxB.innerHTML = `b = ${b_number}`;
boxB.style.color = b_color;

boxC.innerHTML = `c = ${c_number}`;
boxC.style.color = c_color;
