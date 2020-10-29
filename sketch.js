
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var originX = 400;
var originY = 20;
var bobDiameter = 40;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1, rope2, rope3, rope4, rope5
var roofTopObject

function preload() {

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	roofTopObject = new Roof(originX, originY, width / 4, height / 20);


	bobObject1 = new Bob(originX - (2 * bobDiameter), originY + (10 * bobDiameter), bobDiameter / 2);
	bobObject2 = new Bob(originX - (bobDiameter), originY + (10 * bobDiameter), bobDiameter / 2);
	bobObject3 = new Bob(originX, originY + (10 * bobDiameter), bobDiameter / 2);
	bobObject4 = new Bob(originX + (bobDiameter), originY + (10 * bobDiameter), bobDiameter / 2);
	bobObject5 = new Bob(originX + (2 * bobDiameter), originY + (10 * bobDiameter), bobDiameter / 2);

	rope1 = new Rope(bobObject1.body, roofTopObject.body, -(2 * bobDiameter), 0);
	rope2 = new Rope(bobObject2.body, roofTopObject.body, -(bobDiameter), 0);
	rope3 = new Rope(bobObject3.body, roofTopObject.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roofTopObject.body, +(bobDiameter), 0);
	rope5 = new Rope(bobObject5.body, roofTopObject.body, +(2 * bobDiameter), 0);
	console.log(roofTopObject);

	Engine.run(engine);

}


function draw() {



	rectMode(CENTER);
	background("lightblue");
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roofTopObject.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}