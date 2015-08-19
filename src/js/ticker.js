export class Ticker {
  constructor(update) {
    this._update = update;
  }
  tick() {
    let timeNow = (new Date()).getTime();
    let dt = timeNow - (this.lastUpdate || timeNow);

    try {
      this._update(dt);
    } catch (e) {

    }

    this.lastUpdate = (new Date()).getTime();
  }
  start() {
    let self = this;

    function step() {
      self.tick();
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

}
