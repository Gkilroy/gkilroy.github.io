//js es1...4
function ex1() {

    const output1 = document.getElementById('output1');

    console.log("* ex1 js into");
    console.log('*ex1 js into');
    output1.innerText = "ex1 es1..es4 intro to js";
    output1.innerText = 'ex1 es5 intro to js';


}

function ex2() {

    const output1 = document.getElementById('output1');

    console.log("* ex2 js into");
    console.log('* ex2 js into');
    output1.innerText = "ex2 es1..es4 intro to js";
    output1.innerText = 'ex2 es5 intro to js';
}

function ex3() {
    
    const output1 = document.getElementById('output1');

    console.log("* ex3 js into");
    console.log('* ex3 js into');
    output1.innerText = "ex3 es1..es4 intro to js";
    output1.innerText = 'ex3 es5 intro to js';
    return
}

function display_datetime1(){
    const eledate = document.getElementById('lbldate');
    const eletime = document.getElementById('lbltime');
    const d1 = new Date();
    const t1 = new Date(); //using the date to get the time for the date
    let month = (d1.getMonth() + 1); //math order of operation (), *, +
    eledate.innerText = month + "/"+ d1.getDate() + "/" + d1.getFullYear(); 
    eletime.innerText = t1.toLocaleTimeString();
    
}