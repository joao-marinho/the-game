import {MapGenerator} from './map_generator.js'

export class TileMap {
  constructor(w, h) {
    let self = this;

    self.w = w;
    self.h = h;
    self.tiles = [];

    MapGenerator.simple(self);
  }
  getTile(x, y) {
    let self = this;

    return self.tiles[x + y * self.w];
  }
  setTile(x, y, tile) {
    let self = this;

    self.tiles[x + y * self.w] = tile;
  }
}
