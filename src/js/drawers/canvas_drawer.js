export class CanvasDrawer {
  constructor(ctx, canvas) {
    let self = this;

    self.canvas = canvas;
    self.ctx = ctx;
  }
  rect(x, y, width, height, color) {
    let self = this;
    self.ctx.fillStyle = color;
    self.ctx.fillRect(x, y, width, height);
  }
  clear() {
    let self = this;

    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
  }
}
