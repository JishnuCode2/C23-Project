
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var btn2;
var ball,ball2,ball3,ball4,ball5;
var con,con2,con3,con4,con5;


function setup() {
  createCanvas(700,400);

  engine = Engine.create();
  world = engine.world;
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);
  

   var ball_options = {
    restitution: 0.999,
  }
   
  
 ground_options={
	 isStatic : true
 }
  
   
  ground = Bodies.rectangle(280,20,200,20,ground_options);
  World.add(world, ground);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(240,200,20,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(280,200,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(320,200,20,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(360,200,20,ball_options);
  World.add(world,ball5);

  
  con = Matter.Constraint.create({
   pointA : {x : 200, y : 30},
   bodyB : ball,
   pointB : {x : 0, y : 0},
   length : 200,
   stiffness : 0.1
  })
  World.add(world,con);
  
  con2 = Matter.Constraint.create({
    pointA : {x:240,y: 30},
    bodyB : ball2,
    pointB : {x:0,y:0},
    length : 200,
    stiffness : 0.1
    })
  World.add(world,con2);

  con3 = Matter.Constraint.create({
    pointA : {x : 280, y : 30},
    bodyB : ball3,
    pointB : {x : 0, y : 0},
    length : 200,
    stiffness : 0.1
   })
   World.add(world,con3);

   con4 = Matter.Constraint.create({
     pointA : {x : 320, y : 30},
     bodyB : ball4,
     pointB : {x:0,y:0},
     length : 200,
     stiffness : 0.1
     })
   World.add(world,con4);

   con5 = Matter.Constraint.create({
    pointA : {x : 360, y : 30},
    bodyB : ball5,
    pointB : {x : 0, y : 0},
    length : 200,
    stiffness : 0.1
   })
   World.add(world,con5);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  stroke("white");
  push()
  fill("red");
  rect(ground.position.x,ground.position.y,200,20)
  pop()

  push()
  fill("white");
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  pop()
  
  push()
  line (con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line (con3.pointA.x, con3.pointA.y, ball3.position.x, ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line (con5.pointA.x, con5.pointA.y, ball5.position.x, ball5.position.y);
  pop() 




  Engine.update(engine);
}

function vforce(){

    Matter.Body.applyForce(ball,{x:0,y:0},{x: -0.05,y:0})

}