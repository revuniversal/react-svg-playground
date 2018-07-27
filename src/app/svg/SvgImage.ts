import { action, computed, observable } from 'mobx';
import ISvgElement from './SvgElement';
import ViewBox from './ViewBox';

class SvgImage {
  @observable public elements: ISvgElement[] = [];
  @observable public viewBox: ViewBox = new ViewBox(0, 0, 50, 50);
  @observable public selectedElement?: ISvgElement = undefined;

  @computed
  public get xml(): string {
    const opening = `<svg viewBox="${this.viewBox}">`;
    const content = this.elements.map(e => e.xml).join('');
    const closing = '</svg>';
    return opening + content + closing;
  }

  @action
  public addElement = (element: ISvgElement, select: boolean = true) => {
    this.elements.push(element);

    if (select) {
      this.select(element);
    }
  };

  @action
  public select = (element: ISvgElement) => {
    window.console.log(element);
    this.selectedElement = element;
  };
}

export default SvgImage;
