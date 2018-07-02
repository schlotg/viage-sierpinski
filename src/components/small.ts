import { Component } from 'viage';
import { Triangle } from './triangle';

export class Small extends Component {

  constructor() {
    super('small');
  }

  init(left: number, top: number, width: number) {
    const half_width = width * .5;
    const quarter_width = width * .5;
    this.createComponent(Triangle).init(left, top, quarter_width).attach(this.e);
    this.createComponent(Triangle).init(left - width, top + width, quarter_width).attach(this.e);
    this.createComponent(Triangle).init(left + width, top + width, quarter_width).attach(this.e);
    return this;
  }

  setValue(val: string) {
    this.forEachComponents((c: Triangle ) => c.setValue(val));
  }
}

