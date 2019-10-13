function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 0; i <= 400; i = i + 10) {
    var startX = 200;
    var startY = 0;
    var endX = 200;
    var endY = 400;
    line(startX-i, startY, endX-i, endY-i);
    line(startX+i, startY, endX+i, endY);

  }
}
