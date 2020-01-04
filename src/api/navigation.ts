import { sortFolderContent } from '../utils';
import { FolderContent } from '../types/state';

const fs = window.require('fs-extra');

/**
 * List all files and folders in given path
 * @param path to list files and folders from
 * @returns Array<{name: string, type: "file" | "folder"}>
 */
export const listFiles = async (path: string) => {
  const children = await fs.readdir(path, { withFileTypes: true });

  let file: FolderContent = [];
  let folder: FolderContent = [];

  for (const child of children) {
    if (child.isFile()) {
      file.push({ name: child.name, type: 'file' });
    } else {
      folder.push({ name: child.name, type: 'folder' });
    }
  }

  return [...folder.sort(sortFolderContent), ...file.sort(sortFolderContent)];
};
