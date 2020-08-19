class Dog {
    constructor(canvas) {
        // this.posX = posX;
        // this.posY = posY;
        this.radius = 5;
        this.color = "#4e4e4e";
        this.canvas = canvas;
        this.randomPos();
}

    randomPos() {
        this.posX = this.canvas.width * Math.random();
        this.posY = this.canvas.height * Math.random();
    }

    radius(maxX, maxY, numDogs) {
        let targetDogArea = (maxX * maxY) / numDogs;
        let targetRadius = Math.sqrt(targetDogArea / Math.PI);
        return 2 * targetRadius;
    };

    // strayColor() {
    //     let color = "#4e4e4e";
    //     return color;
    // };

    moveRandom() {
        let dx = Math.random() * 2 - 1;
        let dy = Math.random() * 2 - 1;

        this.posX = Math.abs((this.posX + dx * this.radius * 0.1) % maxX);
        this.posY = Math.abs((this.posY + dy * this.radius * 0.1) % maxY);
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

export default Dog;