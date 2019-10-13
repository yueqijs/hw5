function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0);
  
  for (var x = 10; x <= width-10; x +=20) {
      for (var y = 10; y <= height-10; y +=20) 
    ellipse(x,y,15,15);

  }
}
