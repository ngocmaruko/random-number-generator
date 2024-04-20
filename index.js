const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2 = document.getElementById('myLabel2');
const myLabel3 = document.getElementById('myLabel3');
const min = 1;
const max = 6;

myButton.onclick = function (){
    //six-sided dice
    myLabel1.textContent = Math.floor((Math.random() * 6) + 1);
    myLabel2.textContent = Math.floor((Math.random() * 6) + 1);
    myLabel3.textContent = Math.floor((Math.random() * 6) + 1);

}