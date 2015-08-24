import {Color} from './color.js'

export class PlayerDrawer {
  constructor(player, drawer) {
    let self = this;

    self.player = player;
    self.drawer = drawer;
  }
  draw() {
    let self = this;
    let p = self.player;

    self.drawer.rect(p.pos.x, p.pos.y, 16, 32, Color.RED);
  }
}
