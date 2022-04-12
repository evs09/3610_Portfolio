let canvas = document.getElementById("cartoon-canvas");
let context = canvas.getContext("2d");

function setup() {
    context.fillStyle = "#87d5ed";
    context.fillRect(0, 0, canvas.width, canvas.height );

    drawGround();
    drawHouse();
    drawSun();
    drawMountains();
    myText();

}

function drawGround(){
    context.fillStyle = "#1d7d26";
    context.fillRect(0, canvas.height-60, canvas.width, canvas.height);
}

function drawHouse(){
    context.beginPath();
    context.lineWidth = "2"; 
    context.strokeStyle = "#000000";

    //House floor 1 coords: top-l corner: (30, 389), top-r: (280, 389), low-l: (30, 539) (280, 539)
    context.rect(30, canvas.height-211, 250, 150);
    context.stroke();

    //House floor 2 coords: top-l corner: (30, 238), top-r (205, 238), low-l (30, 388), low-r (205, 388)
    context.beginPath();
    context.rect(30, canvas.height-362, 175, 150);
    context.stroke();

    context.fillStyle = "#dbd8e6";
    context.fillRect(30, canvas.height - 211, 250, 150);
    context.fillRect(30, canvas.height-362, 175, 150);

    //Balcony roof & roof
    context.fillStyle="#6e1a09";
    drawTriangle(205, canvas.height-362, 280, canvas.height-322, 205, canvas.height-322);
    drawTriangle(30, canvas.height-362, 205, canvas.height-362, 117, canvas.height-420);

    //door
    context.fillStyle = "#6e1a09";
    context.strokeStyle = "#000000";
    context.rect(135, 459, 40, 80);
    context.fillRect(136, 460, 39, 79);
    context.stroke();

    //windows (for-loop of 3 for first floor)
    drawTopWindows();
    drawLowWindows();

    //Balcony Fence
    drawFence(206, 349, 40, 75);
    //House Fence
    drawFence(32, 509, 30, 80);
    drawFence(200, 509, 30, 200);

}

function drawSun() {
    context.fillStyle="#ffef61";
    context.beginPath();
    context.arc(700, 100, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

function drawMountains(){
    context.fillStyle = "#003002";
    drawTriangle(650, canvas.height - 60, canvas.width + 30, canvas.height - 60, 740, canvas.height - 211);
    
    context.fillStyle = "#1d521d";
    //drawTriangle(475, canvas.height - 60, 675, canvas.height - 60, 575, canvas.heigth - 180);
    drawTriangle(550, canvas.height-60, 700, canvas.height-60, 625, canvas.height-180);
    console.log("here");
}

function myText(){
    context.font = "30px Arial";
    context.fillStyle = "#000000";
    context.fillText("Good Morning!", 35, 45);
}



function drawTopWindows(){
    //let topWindowCornerX = 15; 
    let topWindowCornerY = 285;
    for(let x = 45; x < 163; x+= 53){
        context.beginPath();
        context.fillStyle = "#e1ebe3";
        context.strokeStyle = "#000000";

        context.rect(x, topWindowCornerY, 40, 55);
        context.fillRect(x+1, topWindowCornerY+1, 39, 54);
        context.stroke();
        context.fill();
    }    

}

function drawLowWindows(){
    let topWindowCornerY = 430;
    for(let x = 50; x < 240; x += 150){
        context.beginPath();
        context.fillStyle = "#e1ebe3";
        context.strokeStyle = "#000000";

        context.rect(x, topWindowCornerY, 60, 55)
        context.fillRect(x+1, topWindowCornerY+1, 59, 54);
        context.stroke();
        context.fill();
    }

}

function drawFence(leftX, leftY, height, totalLength){
    for(let x = leftX; x < leftX + totalLength; x += 15){
        context.beginPath();
        context.fillStyle = "#e6dc87";
        context.strokeStyle = "#000000";

        context.rect(x, leftY, 10, height);
        context.fillRect(x+1, leftY + 1, 9, height - 1);
        context.stroke();
        context.fill();

    }


}


function drawTriangle(a1, a2, b1, b2, c1, c2) {
    context.beginPath();
    context.moveTo(a1, a2);
    context.lineTo(b1, b2);
    context.lineTo(c1, c2);
    context.fill();
}

document.addEventListener('DOMContentLoaded', setup);

