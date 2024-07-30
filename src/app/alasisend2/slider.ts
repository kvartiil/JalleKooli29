export class Slider {
  el: HTMLDivElement;
  
  min: number;
  max: number;

  value: number;

  constructor(el, min, max) {
    this.el = el;
    this.min = min;
    this.max = max;
  }

  onMouseDrag(event: MouseEvent | TouchEvent): number {
    this.value = this.calcValueBasedOnPos(this.getPointerPositionOnPage(event));
    return this.value;
  }

  /** Returns whether an event is a touch event. */
  isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    // This function is called for every pixel that the user has dragged so we need it  to be
    // as fast as possible. Since we only bind mouse events and touch events, we can  assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
  }

  /** Gets the coordinates of a touch or mouse event relative to the viewport. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    ///event = event.event;
    const point = this.isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    return {x: point.clientX, y: point.clientY};
  }

  calcValueBasedOnPos(pos: {x: number, y: number}): number {
      const dim = this.el.parentElement.getBoundingClientRect();
      const singlePixelValue: number = this.calcSinglePixelValue(dim);

      pos.x -= dim.left;
      let value: number = pos.x * singlePixelValue;

      return this.getValueInBound(value);
  }

  calcPixelLocationBasedOnValue(value: number): number {
      const dim = this.el.getBoundingClientRect();

      value = this.getValueInBound(value);

      const singlePixelValue: number = this.calcSinglePixelValue(dim);

      let pixelLocation: number = (value / singlePixelValue) + dim.left;

      return pixelLocation;
  }

  private calcSinglePixelValue(dim: ClientRect | DOMRect): number {
      return (this.max - this.min) / dim.width;
  }

  private getValueInBound(value: number) {
      if (this.min > value) {
          value = this.min;
      }
      else if (this.max < value) {
          value = this.max;
      }
      return value;
  }
}