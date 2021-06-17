class Hero{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:1,
            frictionAir:0.01

        }

        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("Images/hero.png")
        World.add(world,this.body);
    }
    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y);
        
    }
}