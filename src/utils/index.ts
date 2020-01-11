import { Child } from '../types/state';

const os = window.require('os');
const path = window.require('path');
const { shell } = window.require('electron');

// Point trash do different path based on os
const getTrashDir = () => {
  switch (os.platform()) {
    case 'darwin':
      return '~/.Trash';
    case 'win32':
      return 'C:\\$Recycle.Bin';
    default:
      return path.join(os.homedir(), '/.local/share/Trash/files');
  }
};

export const getPath = (name: string) => {
  switch (name) {
    case 'home':
      return os.homedir();
    case 'trash':
      return getTrashDir();
    case 'recent':
      return 'recent:///';
    case 'desktop':
      return path.join(os.homedir(), 'Desktop');
    case 'download':
      return path.join(os.homedir(), 'Downloads');
    case 'image':
      return path.join(os.homedir(), 'Pictures');
    default:
      return '';
  }
};

export const splitPath = (currentPath: string) => {
  let pathsArray = currentPath.split(path.sep);

  if (pathsArray[0] === '') {
    pathsArray[0] = '/';
  }

  return pathsArray.filter(trail => trail !== '');
};

export const joinPath = (breadCrumbs: Array<string>) =>
  path.join.apply(null, breadCrumbs);

export const appendPath = (currentPath: string, item: string) =>
  path.join(currentPath, item);

export const openFileDefault = (fullPath: string) => shell.openItem(fullPath);

export const sortFolderContent = (a: Child, b: Child): number => {
  const child1 = a.name.toLowerCase();
  const child2 = b.name.toLowerCase();

  if (child1 < child2) {
    return -1;
  }
  if (child2 > child1) {
    return 1;
  }
  return 0;
};

export const isWindows = os.platform() === 'win32';
