const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

var object_options={
  isStatic:true
}

ground = Bodies.rectangle(400,390,800,20,object_options);
World.add(world,ground);

var ball_options={
  restitution:1.0
}

ball = Bodies.circle(200,200,50,ball_options);
World.add(world,ball);
console.log(ball);


}

function draw() {
  background("black");
  Engine.update(engine);
 
  rectMode(CENTER);  
  rect(ground.position.x, ground.position.y, 800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
}








































