export class Color {
  static random() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  static get GREEN() {
    return "#00FF00";
  }
  static get BROWN() {
    return "#8B4513";
  }
}
