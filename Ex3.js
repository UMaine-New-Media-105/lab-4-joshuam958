 setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myAlien(-60,-60,1.3)
}

function myEllipse(x, y, w, h, eR, eG, eB) {
  fill(eR, eG, eB);
  ellipse(x, y, w, h);
}

function myTriangle(x1, y1, x2, y2, x3, y3, tR, tG, tB) {
  fill(tR, tG, tB);
  triangle(x1, y1, x2, y2, x3, y3);
}

function myQuad(x1, y1, x2, y2, x3, y3, x4, y4, qR, qG, qB) {
  fill(qR, qG, qB);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function myAlien(x,y,size){
  push()
  translate(x,y)
  scale(size)
  myEllipse(200, 200, 200, 300, 0, 255, 100);
  myTriangle(170, 200, 230, 200, 200, 175, 0, 280, 280);
  myQuad(210, 70, 270, 70, 300, 150, 230, 150, 200, 0, 200);
  myQuad(190, 70, 130, 70, 100, 150, 170, 150, 200, 0, 200);
  myEllipse(200, 270, 140, 50, 0, 0, 0);
  pop()
}
