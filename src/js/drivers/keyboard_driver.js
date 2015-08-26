import {BaseDriver} from './base_driver.js'

export class KeyboardDriver extends BaseDriver {
  constructor(element) {
    element.onkeydown = MouseDriver._onkeydown;
    element.onkeyup = MouseDriver._onkeyup;

    this.element = element;
  }
  static _onkeydown(event) {
    console.log("Key down");
  }
  static _onkeyup(event) {
    console.log("Key up");
  }

  
}
