const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground



function setup() {
  createCanvas(800,400);

engine=Engine.create();
world=engine.world

 var Option={
isStatic:true,
restitution:0.3



 }


ground=Bodies.rectangle(400,380,800,20,Option)

World.add(world,ground)

ball=Bodies.circle(400,100,20)

World.add(world,ball)




}

function draw() {
  background("red");  
  Engine.update(engine)

  fill("black") 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(CENTER)

ellipse(ball.position.x,ball.position.y,20,20)




}