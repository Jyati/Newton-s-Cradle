class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: { x: this.offsetX, y: this.offsetY }
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var point2X = pointB.x + this.offsetX
        var point2Y = pointB.y + this.offsetY
        fill(0);
        strokeWeight(4);
        line(pointA.x, pointA.y,point2X, point2Y);
    }
}