
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject,wall1,wall1Sprite;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,50,50);
	groundObject=new Ground(width/2,450,width,20);
	box1 = new Box(1300,350,30,150);
	box2 = new Box(1000,350,30,150);
	box3 = new Box(1150,420,300,30);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
 
  
  paperObject.display();
  groundObject.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW&&paperObject.body.position.y>400) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:22*2,y:-25*2});

  
	}
}


