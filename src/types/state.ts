export interface Child {
  name: string;
  type: 'file' | 'folder';
}

export type Children = Array<Child>;

export type Selection = Array<string>;

export type FolderContent = {
  children: Children;
  showHiddenContent: boolean;
};

export interface App {
  currentPath: string;
  folderContent: FolderContent;
  selection: Selection;
}
