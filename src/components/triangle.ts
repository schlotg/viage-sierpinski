import { Component } from 'viage';

export class Triangle extends Component {

  constructor() {
    super('triangle');
  }
  init(left: number, top: number, width: number) {
    const half_width = width * .5;

    this.setHTML(`
      <div attach="cir1" style="${this.generateStyle(left, top, width)}"></div>
      <div attach="cir2" style="${this.generateStyle(left - half_width, top + half_width, width)}"></div>
      <div attach="cir3" style="${this.generateStyle(left + half_width, top + half_width, width)}"></div>
      <div attach="cir4" style="${this.generateStyle(left - half_width * 2, top + half_width * 2, width)}"></div>
      <div attach="cir5" style="${this.generateStyle(left + half_width * 2, top + half_width * 2, width)}"></div>
      <div attach="cir6" style="${this.generateStyle(left - half_width * 3, top + half_width * 3, width)}"></div>
      <div attach="cir7" style="${this.generateStyle(left - half_width * 1, top + half_width * 3, width)}"></div>
      <div attach="cir8" style="${this.generateStyle(left + half_width * 1, top + half_width * 3, width)}"></div>
      <div attach="cir9" style="${this.generateStyle(left + half_width * 3, top + half_width * 3, width)}"></div>
    `);
    // now attach all the listeners
    this.forEachAttachments((e: HTMLDivElement) => {
      e.addEventListener('mouseenter', () => {
        e.style.backgroundColor = '#ff0';
        e.textContent += '*';
      });
      e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = 'rgb(97, 218, 251)';
        e.textContent = e.textContent.replace('*', '');
      });
    });

    return this;
  }

  private generateStyle(left: number, top: Number, width: number) {
    return `
      position: absolute; background: rgb(97, 218, 251); font-style: normal; font-variant: normal; font-weight: normal;
      font-stretch: normal; font-size: 15px; line-height: ${width}px; font-family: sans-serif; text-align: center; cursor: pointer;
      width: ${width}px; height: ${width}px; left: ${left}px; top: ${top}px; border-radius: ${width * .5}px;
    `;
  }

  setValue(val: string) {
    this.forEachAttachments((e: HTMLDivElement ) => e.textContent = val);
  }
}

