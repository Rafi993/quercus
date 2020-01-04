import { combineReducers } from 'redux';

import { App } from '../types/state';
import currentPath from './currentPath';
import folderContent, * as fromFolderContent from './folderContent';

const rootReducer = combineReducers({
  currentPath,
  folderContent,
});

export const getFolderContent = (state: App) =>
  fromFolderContent.getFolderContent(state.folderContent);

export default rootReducer;
