class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
length:250,
stiffness:1.2
}

this.pointB=pointB,
this.rope=Constraint.create(options)
World.add(world,this.rope)

}
display(){
var pointA=this.rope.bodyA.position
var pointB=this.pointB
stroke(40,22,8)
line(pointB.x,pointB.y,pointA.x,pointA.y)

}






}