function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  Alien(-60,-60,1.3)
  if (mouseIsPressed){
  Diamond()
  }
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

function Alien(x,y,size){
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

function Diamond(){
  myQuad(200,20,380,120,200,380,20,120,0,100,255)
  myQuad(200,20,340,120,200,380,60,120,0,140,255)
  myQuad(200,20,300,120,200,380,100,120,0,180,255)
  myQuad(200,20,260,120,200,380,140,120,0,220,255)
  myQuad(200,20,220,120,200,380,180,120,0,255,255)
  myEllipse(120,120, 100, 70,255,255,255)
  myEllipse(280,120, 100, 70,255,255,255)
  myEllipse(120,120, 50, 70,0,0,0)
  myEllipse(280,120, 50, 70,0,0,0)
}
