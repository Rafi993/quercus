const os = window.require('os');
const path = window.require('path');
const { shell } = window.require('electron');

export const getPath = (name: string) => {
  switch (name) {
    case 'home':
      return os.homedir();
    case 'trash':
      return 'trash:///';
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
