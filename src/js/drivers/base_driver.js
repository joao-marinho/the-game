export class BaseDriver {
  constructor(element) {
    this.element = element;
  }
  isKeyPressed(key) {
    throw ".isKeyPressed not implemented";
  }
  getPressedKeys() {
    throw ".getPressedKeys not implemented";
  }
}
