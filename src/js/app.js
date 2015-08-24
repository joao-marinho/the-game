import {Game} from './game.js'
import {Drawer} from './drawer.js'
import {Ticker} from './ticker.js'
import {Player} from './player.js'
import {World} from './world.js'
import {TileMap} from './tile_map.js'
import {TileMapDrawer} from './drawers/tile_map_drawer.js'
import {PlayerDrawer} from './drawers/player_drawer.js'

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
