import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as atypes from '../constants/actionTypes';
import { Children, FolderContent } from '../types/state';
import { GetFolderContentAction, ToggleHiddenContent } from '../types/actions';

export function children(
  state: Children = [],
  { type, payload }: GetFolderContentAction
) {
  switch (type) {
    case atypes.SET_CURRENT_PATH:
      return [];
    case atypes.GET_FOLDER_CONTENTS_SUCCESS:
      return payload.children;
    default:
      return state;
  }
}

export function showHiddenContent(
  state: boolean = false,
  { type }: ToggleHiddenContent
) {
  switch (type) {
    case atypes.TOGGLE_HIDDEN_CONTENT:
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  children,
  showHiddenContent,
});

export const getFolderContent = createSelector(
  [
    (state: FolderContent) => state.children,
    (state: FolderContent) => state.showHiddenContent,
  ],
  (children: Children, showHiddenContent: boolean) => {
    if (showHiddenContent) {
      return children;
    }
    return children.filter(child => child.name[0] !== '.');
  }
);
