import * as atypes from '../constants/actionTypes';

import {
  SetCurrentPathAction,
  OpenFileAction,
  NavigateBack,
} from '../types/actions';

export const setCurrentPath = (path: string): SetCurrentPathAction => ({
  type: atypes.SET_CURRENT_PATH,
  payload: { path },
});

export const openFile = (fileName: string): OpenFileAction => ({
  type: atypes.OPEN_FILE_REQUEST,
  payload: { fileName },
});

export const navigateBack = (): NavigateBack => ({
  type: atypes.NAVIGATE_BACK,
});
