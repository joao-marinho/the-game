import {Game} from './game.js'
import {Color} from './color.js'
import {Drawer} from './drawer.js'
import {Ticker} from './ticker.js'

let game = new Game();

window.onload = () => {
  let canvas = document.getElementsByTagName('canvas')[0];
  let ctx = canvas.getContext("2d");
  let drawer = new Drawer(ctx, canvas);

  let tm = new TileMap(50, 37);
  let tmd = new TileMapDrawer(tm, drawer);
  let player = new Player({x: 32, y: 32});
  let playerDrawer = new PlayerDrawer(player, drawer);
  let world = new World();
  world.setTileMap(tm);
  world.addEntity(player);

  let f = dt => {
    drawer.clear();
    tmd.draw();
    playerDrawer.draw();
    world.update(dt);
  }

  let t = new Ticker(f);

  t.start();

}

class Tile {
  constructor(name, layer = 1) {
    let self = this;

    self.name = name;
    self.layer = layer;
  }
}

class TileDrawer {
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

class TileMapDrawer {
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

class MapGenerator {
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

class TileMap {
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

class PlayerDrawer {
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

class Entity {
  constructor(pos, dim) {
    let self = this;

    self.dim = dim;
    self.pos = pos;
  }
}

class Player extends Entity {
  constructor(pos) {
    super(pos, {h: 2, w: 1});

    let self = this;
  }
}

class World {
  constructor() {
    let self = this;

    self.entities = [];
  }
  addEntity(entity) {
    let self = this;
    self.entities.push(entity);
  }
  setTileMap(tileMap) {
    let self = this;

    self.tileMap = tileMap;
  }
  update(dt) {
    let self = this;

    self.entities.forEach(entity => {
      entity.pos.y = entity.pos.y + 10;
    });
  }
}
