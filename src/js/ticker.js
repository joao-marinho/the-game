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
    this._scheduleNextStep();
  }
  stop() {
    window.cancelAnimationFrame(this._requestId);
  }

  _step() {
    this.tick();
    this._scheduleNextStep();
  }
  _scheduleNextStep() {
    let step = this._step.bind(this);
    this._requestId = window.requestAnimationFrame(step);
  }
}
