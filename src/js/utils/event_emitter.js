export class EventEmitter {
  constructor() {
    this._events = {};
  }
  addListener(event, listener) {
    this._events[event] = this._events[event] || [];
    this._events[event].push(listener);
  }
  removeListener(event, listener) {
    this._events[event] = this._events[event] || [];
    this._events[event].splice(this._events[event].indexOf(listener), 1);
  }
  emit(event, ...args) {
    this._events[event] = this._events[event] || [];
    this._events[event].forEach(listener => {
      listener.apply(null, args);
    });
  }
}
