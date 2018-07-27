import ISortable from 'src/app/ISortable';

interface ISvgElement extends ISortable {
  canSortUp: boolean;
  canSortDown: boolean;
  readonly xml: string;
}

export default ISvgElement;
