export class Drawer {
  constructor(ctx) {
    let self = this;

    self.ctx = ctx;
  }
  rect(x, y, w, h, color) {
    let self = this;
    self.ctx.fillStyle = color;
    self.ctx.fillRect(x, y, w, h);
  }
}
