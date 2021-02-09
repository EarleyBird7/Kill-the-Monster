
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint
var bgImage

function preload()
{
	bgImage=loadImage("GamingBackground.png")
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

box1 = new Box(500,100,100,100)
box2 = new Box(500,100,100,100)
box3 = new Box(500,100,100,100)
box4 = new Box(500,100,100,100)
box5 = new Box(500,100,100,100)
box6 = new Box(600,100,100,100)
box7 = new Box(600,100,100,100)
box8 = new Box(600,100,100,100)
box9 = new Box(600,100,100,100)
box10 = new Box(600,100,100,100)
box11 = new Box(700,100,100,100)
box12 = new Box(700,100,100,100)
box13 = new Box(700,100,100,100)
box14 = new Box(700,100,100,100)
box15 = new Box(700,100,100,100)

monster = new Monster(800,100,100,100)

ground = new Ground(500,750,15000,20)

ball = new Ball(200,200,100,100)

rope= new Rope(ball.body,{x:400,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  ground.display()
  ball.display()
  rope.display()
  monster.display()
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

