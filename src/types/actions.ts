import * as atypes from '../constants/actionTypes';
import { Child } from './state';

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
    children: Array<Child>;
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
