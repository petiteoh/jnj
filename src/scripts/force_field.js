class ForceField {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.canvasPos = this.getPosition(this.canvas);
        debugger
        this.mouseX = 0;
        this.mouseY = 0;
        this.setMousePosition = this.setMousePosition.bind(this);
        this.isColliding = false;
        // this.canvas.addEventListener("mousemove", this.setMousePosition.bind(this), false);
    }


    setMousePosition(e) {
        this.mouseX = e.clientX - this.canvasPos.x;
        this.mouseY = e.clientY - this.canvasPos.y;
        // console.log(`${this.mouseX} ${this.mouseY}`)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.update();
        // this.ctx.beginPath();
        // this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
        // this.ctx.fillStyle = "#FF6A6A";
        // this.ctx.fill();
    }
    
    getPosition(canvas) {
        debugger
      let xPosition = 0;
      let yPosition = 0;
    
      while (canvas) {
        xPosition += canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft;
        yPosition += canvas.offsetTop - canvas.scrollTop + canvas.clientTop;
        canvas = canvas.offsetParent;
      }

      debugger;
      return {
        x: xPosition,
        y: yPosition,
      };
    }
    
    update() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // requestAnimationFrame(this.update.bind(this));
        // this is a global function so you need to bind it
        this.ctx.beginPath();
        this.ctx.arc(this.mouseX, this.mouseY, 50, 0, 2 * Math.PI, true);
        this.ctx.fillStyle = "#FF6A6A";
        this.ctx.fill();
    }
}

export default ForceField;

