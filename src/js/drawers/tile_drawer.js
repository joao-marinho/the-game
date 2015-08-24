import {Color} from './color.js'

export class TileDrawer {
  constructor(drawer) {
    let self = this;

    self.drawer = drawer;
  }
  draw(i, j, tile) {
    let self = this;

    if(tile.name == 'empty') {
      return;
    }
    else if(tile.name == 'grass') {
      self.drawer.rect(i * 16, j * 16, 16, 16, Color.GREEN);
    }
    else if(tile.name == 'dirt') {
      self.drawer.rect(i * 16, j * 16, 16, 16, Color.BROWN);
    }
  }
}
