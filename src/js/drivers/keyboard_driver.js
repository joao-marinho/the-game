import {EventEmitter} from '../utils/event_emitter.js'

export class KeyboardDriver extends EventEmitter {
  constructor(element) {
    super();

    let self = this;

    element.onkeydown = function(event) {
      let char = KeyboardDriver.getStandardCharFromEvent(event);
      self.emit(char + ':down', event);
    };

    element.onkeyup = function(event) {
      let char = KeyboardDriver.getStandardCharFromEvent(event);
      self.emit(char + ':up', event);
    };

    element.onkeypress = function(event) {
      let char = KeyboardDriver.getStandardCharFromEvent(event);
      self.emit(char + ':press', event);
    };

    self.element = element;
  }
  static getStandardCharFromEvent({charCode: charCode}) {
    return String.fromCharCode(charCode).toLowerCase();
  }
}
