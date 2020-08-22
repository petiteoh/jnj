class Dog {
    constructor(canvas, ctx, x, y, vx, vy) {
        // this.posX = posX;
        // this.posY = posY;
        this.vx = vx;
        this.vy = vy;
        this.radius = 5;
        this.color = "#c7c2bf";
        this.canvas = canvas;
        this.randomPos();
        this.ctx = ctx;
        this.isColliding = false;
        // another instance variable can keep track if its a stray or not eh boolean
        // which feeds into the win/lose Main.js to check if that is the target
}

    randomPos() {
        this.x = this.canvas.width * Math.random();
        this.y = this.canvas.height * Math.random();
    }

    radius(maxX, maxY, numDogs) {
        let targetDogArea = (maxX * maxY) / numDogs;
        let targetRadius = Math.sqrt(targetDogArea / Math.PI);
        return 2 * targetRadius;
    };

    moveRandom() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }
}

export default Dog;