
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shooter,obstacles;
var bg_Image,backImage;
var asteroid_Image;
var shooter_Image;

function preload()
{
	backImage=loadImage("SpaceAnimated.jpg")
	asteroid_Image=loadImage("Asteroid.png")
	shooter_Image=loadImage("SpaceshipShooter.png")
}
function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg_Image=createSprite(displayWidth/2,displayHeight/2-50,displayWidth,displayHeight);
	bg_Image.addImage(backImage);
	//bg_Image.shapeColor="blue";
	shooter=createSprite(300,600,30,30);
	shooter.addImage(shooter_Image);
	shooter.scale = 0.25
	
	bg_Image.velocityY=4
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //console.log(bg_Image.y);
  if(bg_Image.y>500){
	bg_Image.y=bg_Image.height/2;
}
  shooter.x=mouseX;

  
  drawSprites();
  spawnObstacles(); 
}

function spawnObstacles(){
	if(frameCount % 70 === 0){
		var Asteroids = createSprite(500,0,50,50);
		Asteroids.addImage(asteroid_Image);
		Asteroids.scale=0.5;
		Asteroids.velocityY = 4

		Asteroids.x=Math.round(random(30,800));

	}
}



