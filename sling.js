class Sling{
    constructor(body1,pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.PointB= pointB;
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA!== null)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    fly()
    {
     this.chain.bodyA = null;
    }
}