import * as atypes from '../constants/actionTypes';
import { Children } from './state';

export interface SetCurrentPathAction {
  type: typeof atypes.SET_CURRENT_PATH;
  payload: {
    path: string;
  };
}

export interface GetFolderContentAction {
  type:
    | typeof atypes.SET_CURRENT_PATH
    | typeof atypes.GET_FOLDER_CONTENTS_SUCCESS;
  payload: {
    children: Children;
  };
}

export interface OpenFileAction {
  type: typeof atypes.OPEN_FILE_REQUEST;
  payload: {
    fileName: string;
  };
}

export interface ToggleHiddenContent {
  type: typeof atypes.TOGGLE_HIDDEN_CONTENT;
}

export interface ToggleSelection {
  type:
    | typeof atypes.TOGGLE_SINGLE_CHILD_SELECTION
    | typeof atypes.SET_CURRENT_PATH
    | typeof atypes.OPEN_FILE_REQUEST
    | typeof atypes.TOGGLE_HIDDEN_CONTENT;
  payload: {
    child?: string;
  };
}
