class Roof {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            stiffness: 2,
            friction: 0.0,
            density: 0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        // var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        // rotate(angle)
        fill("maroon");
        stroke("white");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop()
    }

}