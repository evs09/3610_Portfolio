let canvas = document.getElementById("anim-canvas");
let context = canvas.getContext("2d");

let sprites = new Image();
sprites.src = './spritesheet-cat.png';

function setup() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height );

    drawGround();


}

sprites.onload = function() {

    //context.drawImage(sprites, 0, 0, 210, 140, 0, 250, 105, 70);
    let spChangeX = 212;
    let canvChangeX = 30;
    let i = 0;
    let timeX = 0;


    for(let xPos = 0; xPos < 600; xPos+=30){
        setTimeout(() => {
            context.fillStyle="#1d7d26";
            context.fillRect(0, 250, canvas.width, 250);
            context.drawImage(sprites, spChangeX*i, 0, 212, 140, xPos, 260, 105, 70);
            console.log("i: " + i + " xpos: " + xPos);

            if(i==6){
                i=0
            }
            else{
                i++;
            }

            if(xPos >= 500){
                xPos = 0;
                console.log("changed, x: " + xPos);
                
            }


        }, 3*xPos);


    }

}



function drawGround(){
    context.fillStyle = "#1d7d26";
    context.fillRect(0, 250, canvas.width, 250);
}

document.addEventListener('DOMContentLoaded', setup);

