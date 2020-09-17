var boxLeft,boxRight,boxBottom;
var boxB,boxL,boxR;
var ground,gground;
var ball,ing;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ing = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  boxBottom=createSprite(1000,440,200,40);
  boxBottom.addImage(ing);
  boxBottom.scale=0.87;
	boxRight=createSprite(1100,500,20,300);
	boxLeft=createSprite(900,500,20,300);
	gground=createSprite(650,640,1300,100)

	boxB = Bodies.rectangle(1000,440,200,40,{isStatic:true});
	World.add(world, boxB)
	boxL  = Bodies.rectangle(1100,500,20,300,{isStatic:true});
	World.add(world, boxL)
	boxR  = Bodies.rectangle(900,500,20,300,{isStatic:true});
	World.add(world, boxR)
	
	ground = Bodies.rectangle(650,640,1300,100,{isStatic:true});
 	World.add(world, ground);

	ball = new Ball(100,600,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxBottom.x = boxB.position.x 
  boxBottom.y = boxB.position.y
  boxLeft.x = boxL.position.x 
  boxLeft.y = boxL.position.y
  boxRight.x = boxR.position.x 
  boxRight.y = boxR.position.y
  gground.y = ground.position.y
  gground.x = ground.position.x
  boxBottom.shapeColor="white";
  boxLeft.shapeColor="white";
  boxRight.shapeColor="white";
  gground.shapeColor="yellow";
  boxB.isStatic = true
  boxL.isStatic = true
  boxR.isStatic = true
  gground.isStatic = true
  ball.display();
  drawSprites();
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-45});
	}
}