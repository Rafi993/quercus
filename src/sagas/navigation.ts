import { put, takeLatest, call, select } from 'redux-saga/effects';

import * as atypes from '../constants/actionTypes';
import * as navigationApi from '../api/navigation';
import { appendPath, openFileDefault } from '../utils';
import { SetCurrentPathAction, OpenFileAction } from '../types/actions';

export function* navigate({ payload }: SetCurrentPathAction): any {
  try {
    const children = yield call(navigationApi.listFiles, payload.path);

    yield put({
      type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
      payload: { children },
    });
  } catch (error) {
    yield put({
      type: atypes.GET_FOLDER_CONTENTS_FAILURE,
      payload: {
        error,
      },
    });
  }
}

export function* watchNavigate(): any {
  yield takeLatest(atypes.SET_CURRENT_PATH, navigate);
}

export function* openFile({ payload }: OpenFileAction): any {
  try {
    const currentPath = yield select(app => app.currentPath);
    const fullPath = appendPath(currentPath, payload.fileName);
    const opened = openFileDefault(fullPath);

    if (opened) {
      yield put({
        type: atypes.OPEN_FILE_SUCCESS,
        payload: {
          fileName: fullPath,
        },
      });
    }
  } catch (error) {
    yield put({
      type: atypes.OPEN_FILE_FAILURE,
      payload: { error },
    });
  }
}

export function* watchOpenFile(): any {
  yield takeLatest(atypes.OPEN_FILE_REQUEST, openFile);
}

export default [watchNavigate(), watchOpenFile()];
