interface ISortable {
  canSortUp: boolean;
  canSortDown: boolean;
}

function sortUp(items: ISortable[], item: ISortable) {
  const index = items.indexOf(item);
  const previous = items[index - 1];

  if (item.canSortUp) {
    item.canSortUp = index > 1;
    item.canSortDown = true;
    item.canSortUp = true;
    item.canSortDown = items.length > index + 1;

    items[index - 1] = item;
    items[index] = previous;
  }
}

function sortDown(items: ISortable[], item: ISortable) {
  const index = items.indexOf(item);
  const next = items[index + 1];

  if (item.canSortDown) {
    item.canSortUp = true;
    item.canSortDown = items.length > index + 1;
    next.canSortUp = index > 0;
    next.canSortDown = true;

    items[index + 1] = item;
    items[index] = next;
  }
}

export { sortDown, sortUp };
export default ISortable;
