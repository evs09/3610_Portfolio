let canvas = document.getElementById("lab1-canvas");
let context = canvas.getContext("2d");

function setup() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height );

    makeGraph();
}

var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
    {name:"Bannana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"}
];


function makeGraph() {
    let cut = Math.floor(canvas.width / fruit.length);
    let barWidth = cut - 30;
    let j = 0;
    //one = 30px in height
    let unit = 20;

    for(let i in fruit){
        context.beginPath();

        //Bars

        let fruitColor = fruit[i].color;
        context.fillStyle = fruitColor;
        context.strokeStyle = "#000000";
        
        let barHeight = fruit[i].quantity * unit;

        context.rect(j + 20, canvas.height - barHeight - 50, barWidth, barHeight);
        context.fillRect(j+21, canvas.height - barHeight - 49, barWidth-1, barHeight-1);

        context.stroke();

        //Labels

        context.font = "18px Arial";
        context.fillStyle = "#000000";
        context.fillText(fruit[i].name, j+20, canvas.height - 33);
        context.fillText(fruit[i].quantity, j+20, canvas.height - 10);

        j += cut;

    }

}

document.addEventListener('DOMContentLoaded', setup);