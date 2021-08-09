const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var canvas;
function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(800,400);
  
bal = new ball(width/2,100,30);
blow = new Blower(width/2,height/2,100,100);
blowM = new Blowermouth(280,height/2+40,200,20)
button = createButton("clickTheButton")
button.position(width/2,height-100);
button.mousePressed(Blow)




}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  bal.display()
  blow.display()
  blowM.display()
  drawSprites();
}
function Blow(){
  Matter.Body.applyForce(bal.body,{x:0,y:0},{x:0,y:0.05})
}