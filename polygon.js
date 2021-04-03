class Polygon {
    constructor(posX,posY,radius)
    {
     var options= {isStatic:false};
     this.body = Bodies.circle(posX,posY,radius/2,options)
     this.image = loadImage("polygon.png")
     this.x = posX
     this.y = posY
     this.r = radius
     World.add(world,this.body)
    }
 
    display()
    {
     var pos = this.body.position ;
     push();
     imageMode(CENTER)
     image(this.image,pos.x,pos.y,this.r,this.r)
     pop();
    }
 }