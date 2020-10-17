var paper,bin1,bin2,bin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//No image to be loaded here.
}

function setup() {
	createCanvas(1200, 400);
/*
	bin1 = createSprite(1000,220,20,100);
	bin2 = createSprite(1070,255,120,20);
	bin3 = createSprite(1140,220,20,100);
	bin1.shapeColor = "brown";
	bin2.shapeColor = "brown";
	bin3.shapeColor = "brown";
*/
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	bin1 = new Dustbin(1000,310,20,100);
	bin2 = new Dustbin(1070,350,120,20);
	bin3 = new Dustbin(1140,310,20,100);
	
	paper = new Paper(100,height-65,35);

	//Create a ground here.
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  	paper.display();

	bin1.display();
	bin2.display();			
	bin3.display();
	
	
 	 drawSprites();
 
}
function keyPressed() 
{
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}


