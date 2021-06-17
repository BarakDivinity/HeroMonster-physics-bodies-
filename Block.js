class Block{
    constructor(x,y,width,height,angle){
        var options={
           restitution:1
        }

        this.body=Bodies.rectangle(x,y,width,height,angle,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        Body.setAngle(this.body,angle);
    }
    display(){
        var angle=this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}