var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(600,100,50,50)

  a.shapeColor="blue"
  b.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  console.log(a.x-b.x)
  drawSprites();

  a.x=mouseX
  a.y=mouseY

  if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 && a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2)             {
    a.shapeColor="green"
  b.shapeColor="red"
  }
  else{a.shapeColor="blue"
  b.shapeColor="yellow"}
  
  
}