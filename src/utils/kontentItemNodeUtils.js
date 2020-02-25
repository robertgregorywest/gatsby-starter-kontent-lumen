export function getItemElementValuesFromKontentItemNode(kontentItemNode) {
    let itemValues = {};
    Object.keys(kontentItemNode.elements).forEach(key => {
      Object.defineProperty(itemValues, key, {
        value: kontentItemNode.elements[key].value,
      });
    });
    return itemValues;
  }

export function getMenuItems(kontentItemMenuNode) {
  let menuItems = [];
  kontentItemMenuNode.elements.menu_items.linked_items.map(menuItem => {
    menuItems.push({ 
      label: menuItem.elements.label.value,
      path: menuItem.elements.path.value
    });
  });

  return menuItems;
}