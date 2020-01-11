import { isWindows } from '../utils';

export const defaultSideBarOptions = [
  {
    name: 'recent',
    text: 'Recent',
  },
  {
    name: 'home',
    text: 'Home',
  },
  {
    name: 'desktop',
    text: 'Desktop',
  },
  {
    name: 'download',
    text: 'Downloads',
  },
  {
    name: 'image',
    text: 'Pictures',
  },
  {
    name: 'trash',
    text: isWindows ? 'Recycle Bin' : 'Trash',
  },
];
