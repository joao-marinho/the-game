import {Tile} from './tile.js'


export class MapGenerator {
  static simple(tileMap) {
    let w = tileMap.w;
    let h = tileMap.h;
    let emptyTile = new Tile("empty", 0);
    let grass = new Tile("grass");
    let dirt = new Tile("dirt");

    for(let i = 0; i < w; ++i) {
      for(let j = 0; j < h / 2; ++j) {
        tileMap.setTile(i, j, emptyTile);
      }
      tileMap.setTile(i, Math.ceil(h / 2), dirt);
      for(let j = Math.ceil(h / 2) + 1; j < h; ++j) {
        tileMap.setTile(i, j, grass);
      }
    }
  }
}
