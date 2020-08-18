var dustbinIMG, dustbinSprite, paperIMG, paperSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload() {
	dustbinIMG = loadImage("dustbingreen.png")
	paperIMG = loadImage("paper.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1100,650, 150, 150);
	//dustbinObj.image=loadImage(dustbinIMG)
	//dustbinSprite = createSprite(700, 700, 10, 10)
	//dustbinSprite.addImage(dustbinIMG)
	paperObject=new paper(200,450,40);
	//paperObject.image=loadImage(paperIMG);
	groundObject=new ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0,255,0);
  Engine.update(engine);
  
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  //drawSprites();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}