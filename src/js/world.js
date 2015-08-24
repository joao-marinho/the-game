export class World {
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
