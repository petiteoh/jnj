class Home {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.doorWidth = 15;
        this.doorHeight = 20;
    }

    drawDoor() {
        this.ctx.fillStyle = "#754719";
        this.ctx.fillRect(298, 190, this.doorWidth, this.doorHeight);
    }

    draw() {
        this.ctx.fillStyle = "#f7a065";
        this.ctx.fillRect(280, 180, 50, 30);

        // Draw triangle
        this.ctx.fillStyle = "#f75348";
        this.ctx.beginPath();
        this.ctx.moveTo(270, 180);
        this.ctx.lineTo(340, 180);
        this.ctx.lineTo(305, 150);
        this.ctx.closePath();
        this.ctx.fill();

        //door
        this.drawDoor();

        //paws
        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(299, 220, 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(296.6, 216.5, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(300, 216, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(302.7, 218, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        //
        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(307, 214.4, 1.8, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(305.3, 210.8, 0.8, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(308.5, 210.6, 0.8, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(310.6, 212.7, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        //
        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(297, 230, 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(295.4, 226.2, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(298.8, 226, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(300.7, 228.6, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        //
        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(286, 234, 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(284.4, 230.2, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(287.8, 230, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(289.7, 232.6, 1, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

    }
}

export default Home;