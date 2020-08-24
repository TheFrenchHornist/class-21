var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "purple";
  } else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  bounceOff(fixedRect, movingRect);

  drawSprites();
}

