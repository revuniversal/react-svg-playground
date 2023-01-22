import { observable } from 'mobx';

class ViewBox {
  @observable public x: number = 0;
  @observable public y: number = 0;
  @observable public width: number = 0;
  @observable public height: number = 0;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public toString(): string {
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }
}

export default ViewBox;
