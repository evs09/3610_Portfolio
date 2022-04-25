let canvas = document.getElementById("lab2-canvas");
let context = canvas.getContext("2d");
let btn = document.getElementById("lab2-btn");

function setup() {
    context.fillStyle = "#abbfe0";
    context.fillRect(0, 0, canvas.width, canvas.height );

}

function btnClick() {
    

}

document.addEventListener("click", btnClick);


document.addEventListener('DOMContentLoaded', setup);