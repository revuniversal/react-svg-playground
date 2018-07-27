import { observable } from 'mobx';
import ISortable from 'src/app/ISortable';

class Command implements ISortable {
  @observable public canSortUp: boolean = false;
  @observable public canSortDown: boolean = false;
}

export default Command;
