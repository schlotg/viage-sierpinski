import { Component } from 'viage';
import { Small } from './small';

export class Medium extends Component {

  constructor() {
    super('medium');
  }

  init(left: number, top: number, width: number) {
    const half_width = width * .5;
    this.createComponent(Small).init(left, top, half_width).attach(this.e);
    this.createComponent(Small).init(left - width, top + width, half_width).attach(this.e);
    this.createComponent(Small).init(left + width, top + width, half_width).attach(this.e);
    return this;
  }

  setValue(val: string) {
    this.forEachComponents((c: Small ) => c.setValue(val));
  }
}

