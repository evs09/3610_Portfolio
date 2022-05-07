let canvas = document.getElementById("lab2-canvas");
let context = canvas.getContext("2d");
let btn = document.getElementById("lab2-btn");

let sprites = new Image();
sprites.src = './images/spritesheet-lab2.png';

function setup() {
    context.fillStyle = "#abbfe0";
    context.fillRect(0, 0, canvas.width, canvas.height);

    
}

function btnClick() {
    //89 x 125
    //context.drawImage(sprites, 92, 0, 89, 125, 45, 0, 89, 125);
    let xInit = 92;
    context.fillStyle = "#abbfe0";


    for(let i = 1; i <= 11; i++){
        
        setTimeout(() => {
            context.fillRect(0,0, canvas.width, canvas.height);

            if(i < 11){
                context.drawImage(sprites, xInit * i, 0, 89, 125, 45, 0, 89, 125)
            }
            else{
                context.drawImage(sprites, 92, 0, 89, 125, 0, 0, 89, 125);
                context.drawImage(sprites, 0, 0, 89, 125, 90, 0, 89, 125);
            }
            

        }, 500 * i);
        
    }

}

btn.addEventListener("click", btnClick);

document.addEventListener('DOMContentLoaded', setup);