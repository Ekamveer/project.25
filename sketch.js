const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

var paper;
var box;
var dustbin;
var side;


function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,200,70);
	
	ground = new Ground(600,600,1200,20);

	box= new Dustbin(610,580,200,20);
	//box.shapeColor=color("red");

	dustbin= new Dustbin(500,540,20,100);
	//dustbin2.shapeColor=color("red");

	side=new Dustbin(723,540,20,100);
	//dustbin3.shapeColor=color("red");


	
  
}
  


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  box.display();
  dustbin.display();
  side.display();
  
 
}


function keyPressed(){

		if (keyCode===UP_ARROW){

			Matter.Body.applyForce(paper.body,paper.body.posiyion,{x:85,y:-95});

		}

}






