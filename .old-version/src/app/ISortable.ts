interface ISortable {
  canSortUp: boolean;
  canSortDown: boolean;
}

function addItem(items: ISortable[], item: ISortable) {
  items.push(item);
  setSortability(items, 0);
  setSortability(items, items.length - 1);
}

function deleteItem(items: ISortable[], item: ISortable) {
  const index = items.indexOf(item);
  items.splice(index, 1);
  setSortability(items, 0);
  setSortability(items, items.length - 1);
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

function setSortability(items: ISortable[], index: number) {
  if (items[index] != null) {
    const target = items[index];
    target.canSortUp = index > 0;
    target.canSortDown = index < items.length - 1;
  }
}

export { addItem, deleteItem, sortDown, sortUp };
export default ISortable;
