import nestedTreeData from "./nestedTreeData.json";

export function getTreeData(): TreeDataItem[] {
  return nestedTreeData.map((item) => ({
    ...item,
    hasChildren:
      nestedTreeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}
