import { expectSaga } from 'redux-saga-test-plan';

import * as atypes from '../../constants/actionTypes';
import { navigate, openFile } from '../navigation';
import { SetCurrentPathAction, OpenFileAction } from '../../types/actions';

const { listFilesResponse } = require('../../__mock__/api');

jest.mock('../../api/navigation', () => {
  return require('../../__mock__/api');
});

jest.mock('../../utils', () => {
  return {
    appendPath: (currentPath: string, item: string) => `${currentPath}/${item}`,
    openFileDefault: () => true,
  };
});

describe('navigation saga', () => {
  it('navigation saga success', async () => {
    const initialAction: SetCurrentPathAction = {
      type: atypes.SET_CURRENT_PATH,
      payload: {
        path: '/',
      },
    };

    expectSaga(navigate, initialAction)
      .put({
        type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
        payload: {
          children: listFilesResponse,
        },
      })
      .run();
  });
});

describe('file open saga', () => {
  it('open file in default application', () => {
    const store = {
      currentPath: 'home',
    };

    const fileName = 'hello world';
    const initialAction: OpenFileAction = {
      type: atypes.OPEN_FILE_REQUEST,
      payload: {
        fileName,
      },
    };

    expectSaga(openFile, initialAction)
      .withState(store)
      .put({
        type: atypes.OPEN_FILE_SUCCESS,
        payload: {
          fileName: `home/${fileName}`,
        },
      })
      .run();
  });
});

it.todo('testing backspace key board navigation');
