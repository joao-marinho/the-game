import {TileDrawer} from './tile_drawer.js'

export class TileMapDrawer {
  constructor(tileMap, drawer) {
    let self = this;

    self.tileMap = tileMap;
    self.drawer = drawer;
    self.tileDrawer = new TileDrawer(drawer);
  }
  draw() {
    let self = this;
    let w = self.tileMap.w;
    let h = self.tileMap.h;

    for(let i = 0; i < w; ++i) {
      for(let j = 0; j < h; ++j) {
        let tile = self.tileMap.getTile(i, j);
        self.tileDrawer.draw(i, j, tile);
        // if(tile != 0) {
        //   self.drawer.rect(i * 16, j * 16, 16, 16, Color.random());
        // }
      }
    }
  }
}
