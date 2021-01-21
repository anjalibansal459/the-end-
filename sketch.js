var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	//restitution:2
	//Engine.run(engine);
console.log(star);
}


function draw() {
	background(bgImg);
	drawSprites();
	if(fairy.x<520){
	fill("yellow");
	textSize(20);
	text("help me take the star ",100,100);
	text("use left and right keys to control me",100,130);
	text("use down key to bring the star",100,150)
}
  
  Engine.update(engine);
if(fairy.x>520){
	fairy.velocityX=0;
}

//star.x=starBody.position.x
//star.y=starBody.position.y
keyPressed();
  
if(star.y>470){
	star.velocityY=0;
	star.y=480;
	fill("yellow")
	textSize(20)
	text("YAY! I GOT THE STAR",400,200);
}
}

function keyPressed() {
	//write code here
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=-2;
	}
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=2;
	}
	

if(keyDown("DOWN_ARROW")){
	star.velocityY=2;
}




}
