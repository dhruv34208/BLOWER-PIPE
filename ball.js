class ball {
constructor(x,y,radius){
var options = {
    isStatic : false,
}
this.radius = radius;
this.body = Bodies.circle(x,y,radius,options)
World.add(world,this.body);
}
display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)

}

}