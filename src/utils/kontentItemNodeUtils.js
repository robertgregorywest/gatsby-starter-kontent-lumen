export default function getItemElementValuesFromKontentItemNode(kontentItemNode) {
    debugger;
    let itemValues = {};
    Object.keys(kontentItemNode.elements).forEach(key => {
      Object.defineProperty(itemValues, key, {
        value: kontentItemNode.elements[key].value,
      });
    });
    return itemValues;
  }