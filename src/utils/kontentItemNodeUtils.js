export function getSiteInfo(kontentItemMenuNode, kontentItemAuthorNode, kontentItemSiteMetadataNode) {
  let siteInfo = kontentItemSiteMetadataNode ? getItemElementValuesFromKontentItemNode(kontentItemSiteMetadataNode) : {};
  siteInfo.siteMetadata = {};
  siteInfo.siteMetadata.menu = getMenuItems(kontentItemMenuNode);
  siteInfo.siteMetadata.author = getItemElementValuesFromKontentItemNode(kontentItemAuthorNode);
  return siteInfo;
}

export function getItemElementValuesFromKontentItemNode(kontentItemNode) {
    let itemValues = {};
    Object.keys(kontentItemNode.elements).forEach(key => {
      Object.defineProperty(itemValues, key, {
        value: kontentItemNode.elements[key].value,
      });
    });
    return itemValues;
  }

function getMenuItems(kontentItemMenuNode) {
  let menuItems = [];
  kontentItemMenuNode.elements.menu_items.linked_items.map(menuItem => {
    menuItems.push({ 
      label: menuItem.elements.label.value,
      path: menuItem.elements.path.value
    });
  });

  return menuItems;
}