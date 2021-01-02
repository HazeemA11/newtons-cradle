const Engine=Matter.Engine
const Bodies= Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world,ball,ball2,ball3,ball4,ball5,rope,rope2,rope3,rope4,rope5,ground;


function setup(){
createCanvas(3000,800)
engine=Engine.create()
world=engine.world
ground=new Ground(600,100,1200,20)
ball=new Ball (200,200,20)
ball2=new Ball (200,200,20)
ball3=new Ball (200,200,20)
ball4=new Ball (200,200,20)
ball5=new Ball (200,200,20)

rope=new Rope(ball.body,{x:500,y:100})
rope2=new Rope(ball2.body,{x:500,y:100})
rope3=new Rope(ball3.body,{x:500,y:100})
rope4=new Rope(ball4.body,{x:500,y:100})
rope5=new Rope(ball5.body,{x:500,y:100})

}



function draw(){
background("grey")
Engine.update(engine)
ground.display()
ball.display()
rope.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

ball.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()

}




