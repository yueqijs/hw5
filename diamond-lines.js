 function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   for (var i = 0; i <= 200; i = i + 10) {
    var startX = 0;
    var startY = 200;
    var endX = 400;
    var endY = 200;
    line(startX+i, startY+i, endX-i, endY+i);
    line(startX+i, startY-i, endX-i, endY-i);
  }
}
