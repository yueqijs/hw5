function setup() {
  createCanvas(400, 400);
}


function draw() {
    background(220);
    noFill();
  
  for (var i = 0; i < 390; i = i + 10) {
    ellipse(200, 200, 1 + (390 - i));
  }
}
