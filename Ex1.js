function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myEllipse(200,300,120,160,);
  myTriangle(20,35,120,35,70,175,)
  myQuad(210,40,380,70,380,290,230,150)
}


function myEllipse(x,y,w,h,) {
  ellipse(x,y,w,h,)
}

function myTriangle(x1,y1,x2,y2,x3,y3,){
  triangle(x1,y1,x2,y2,x3,y3)
}

function myQuad(x1,y1,x2,y2,x3,y3,x4,y4){
  quad(x1,y1,x2,y2,x3,y3,x4,y4)
}
