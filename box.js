class box {
    constructor(posX,posY,widtha,heighta)
    {
     var options = {isStatic:false}
     this.body = Bodies.rectangle(posX,posY,widtha,heighta,options)
     this.width = widtha
     this.height = heighta
     World.add(world,  this.body)
    }
 
    display()
    {
    var pos = this.body.position ;
     push();
     rectMode(CENTER)
     fill("blue")
     rect(pos.x,pos.y,this.width,this.height)
     pop();
    }
 }