import { action, computed, observable } from 'mobx';
import { addItem, deleteItem, sortDown, sortUp } from 'src/app/ISortable';
import ISvgElement from './SvgElement';
import ViewBox from './ViewBox';

class SvgImage {
  private static validIdtest: RegExp = /^[A-Za-z]+[\w\-\:\.]*$/;

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
    addItem(this.elements, element);

    if (select) {
      this.select(element);
    }
  };

  @action
  public deleteElement = (element: ISvgElement) => {
    const index = this.elements.indexOf(element);

    deleteItem(this.elements, element);

    if (this.elements.length !== 0) {
      if (this.elements[index]) {
        this.select(this.elements[index]);
      } else {
        this.select(this.elements[index - 1]);
      }
    }
  };

  @action
  public sortElementUp = (element: ISvgElement) => {
    sortUp(this.elements, element);
  };

  @action
  public sortElementDown = (element: ISvgElement) => {
    sortDown(this.elements, element);
    this.select(element);
  };

  @action
  public select = (element: ISvgElement) => {
    this.selectedElement = element;
  };

  public canAssignId = (id: string | null): [boolean, string] => {
    if (!id || !SvgImage.validIdtest.test(id)) {
      return [false, `"${id}" is not a valid html ID.`];
    }

    const ids = this.elements.map(p => p.id);

    if (ids.indexOf(id) === -1) {
      return [true, 'ok'];
    } else {
      return [false, `${id} is already in use.`];
    }
  };
}

export default SvgImage;
