export default class Component {
  constructor() {
    if (typeof this.view !== 'function') { throw new TypeError('children must override view()!'); }
  }
}
