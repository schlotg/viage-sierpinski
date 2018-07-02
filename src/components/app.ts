import { Component } from 'viage';
import { Giant } from './giant';

export class App extends Component {

  yScale = 1;
  yInc = .002;
  yMax = 1.25;
  yMin = .75;
  title = 'Via Performance Test';

  constructor() {
    super('app');

    const width = 1000;
    const circleWidth = 520;
    const top = 25;
    document.querySelector('title').textContent = this.title;
    this.attach('page', true);
    this.setHTML(`
      <style> body { font-family: Helvetica,Arial,sans-serif; } </style>
      <div>
        <h1 style="border-bottom: 1px solid #ddd;">Via Performance Test</h1>
        <div attach="pane" style="transform-origin: 0px 0px 0px; position: absolute; left:50%"></div>
      </div
    `);
    this.init(width * .5, top, circleWidth);
    this.setValue("1");
    let count = 1;
    setInterval(() => {
      count += 1;
      count = (count > 9) ? 1 : count;
      this.setValue(count.toString());
    }, 1000);
    this.animate();
    this.e.style.display = 'block';
  }

  init(left: number, top: number, width: number) {
    const half_width = width * .5;
    this.createComponent(Giant).init(left, top, half_width).attach(this.attachments.pane);
    this.createComponent(Giant).init(left - width, top + width, half_width).attach(this.attachments.pane);
    this.createComponent(Giant).init(left + width, top + width, half_width).attach(this.attachments.pane);
  }

  setValue(val: string){
    this.forEachComponents((c: Giant ) => c.setValue(val));
  }

  animate() {
    window.requestAnimationFrame(() => {
      this.yScale += this.yInc;
      if (this.yScale > this.yMax) {
        this.yScale = this.yMax;
        this.yInc = -this.yInc;
      } else if (this.yScale < this.yMin) {
        this.yScale = this.yMin;
        this.yInc = -this.yInc;
      }
      const xPos = '-520px';
      this.attachments.pane.style.transform = `scaleX(${this.yScale * .6}) scaleY(0.6) translateX(${xPos})`;
      this.animate();
    });
  }
}
