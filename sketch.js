function setup() {
createCanvas(500,500);  

var square = {
  
  x: random(0,width), 
  y: random(0,height),
  width: 25,
  height: 25,
  colour: random(250),
  
  }
  
  fill(square.colour);
  rect(square.x, square.y, square.width, square.height);
}

function draw() {
  
}