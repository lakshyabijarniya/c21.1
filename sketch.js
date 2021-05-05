
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(200, 100, 50, 50);
  fixedRect1.shapeColor1 = "green";

  fixedRect2 = createSprite(300, 100, 50, 50);
  fixedRect2.shapeColor1 = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "green";
  
    fixedRect1.shapeColor = "green"
  }

  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor="yellow";

    fixedRect2.shapeColor="yellow";
  }

  else{
movingRect.shapeColor="red";
fixedRect1.shapeColor="red";
fixedRect.shapeColor="red";
fixedRect2.shapeColor="red";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

