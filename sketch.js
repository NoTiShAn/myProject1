
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balloon,needle,balloonImg,bg,bgImg;
function preload()
{
balloonImg = loadImage('balloonImg.png')
bgImg = loadImage('bgForIMG.jpg')
}
function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;



bg = createSprite(400,700,2000,1000)
bg.addImage('bgImg',bgImg)
bg.y = bg.width/2
bg.velocityY = -3

balloon = createSprite(400,300,20,40)
balloon.shapeColor = 'white'
balloon.addImage('balloonImg',balloonImg)
balloon.scale = 0.25
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bg.velocityY = -3
if(bg.y < 0){
bg.y = bg.width/2
}
  if(keyCode === 37){
balloon.x -= 5
  }
  if(keyCode === 39){
	balloon.x += 5
	  }
  drawSprites();
 
}



