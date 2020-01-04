import { combineReducers } from 'redux';

import { App } from '../types/state';
import currentPath from './currentPath';
import folderContent, * as fromFolderContent from './folderContent';
import selection, * as fromSelection from './selection';

const rootReducer = combineReducers({
  currentPath,
  folderContent,
  selection,
});

export const getFolderContent = (state: App) =>
  fromFolderContent.getFolderContent(state.folderContent);

export const isSelected = (state: App, name: string) =>
  fromSelection.isSelected(state.selection, name);

export default rootReducer;
