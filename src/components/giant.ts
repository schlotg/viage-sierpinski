import { Component } from 'viage';
import { Medium } from './medium';

export class Giant extends Component {

  constructor() {
    super('giant');
  }

  init(left: number, top: number, width: number) {
    const half_width = width * .5;
    this.createComponent(Medium).init(left, top, half_width).attach(this.e);
    this.createComponent(Medium).init(left - width, top + width, half_width).attach(this.e);
    this.createComponent(Medium).init(left + width, top + width, half_width).attach(this.e);
    return this;
  }

  setValue(val: string) {
    this.forEachComponents((c: Medium ) => c.setValue(val));
  }
}

