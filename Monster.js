class Monster{
    constructor(x,y,r){
        var options={
            isStatic:false
        }

        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("Images/monster.png")
        World.add(world,this.body);
    }
    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y);

    }
}