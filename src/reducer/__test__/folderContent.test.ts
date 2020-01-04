import { children, showHiddenContent } from '../folderContent';
import { Children } from '../../types/state';
import * as atypes from '../../constants/actionTypes';

const childrenData: Children = [
  { name: 'hello world', type: 'file' },
  {
    name: 'things',
    type: 'folder',
  },
];

describe('Checking folders content', () => {
  test('Initial state', () => {
    const initialState: Children = [];
    const finalState: Children = [];
    const action = {
      type: 'DEFAULT',
      payload: {},
    };

    // @ts-ignore
    expect(children(initialState, action)).toEqual(finalState);
  });

  test('Navigation to some folder', () => {
    const initialState = childrenData;
    const finalState: Children = [];
    const action = {
      type: atypes.SET_CURRENT_PATH,
      payload: {},
    };

    // @ts-ignore
    expect(children(initialState, action)).toEqual(finalState);
  });

  test('Getting the contents of the folder', () => {
    const initialState: Children = [];
    const finalState = childrenData;
    const action = {
      type: atypes.GET_FOLDER_CONTENTS_SUCCESS,
      payload: {
        children: childrenData,
      },
    };

    // @ts-ignore
    expect(children(initialState, action)).toEqual(finalState);
  });
});

describe('checking if to show hidden folder content', () => {
  test('Initial state', () => {
    const initialState = false;
    const finalState = false;
    const action = {
      type: 'DEFAULT',
      payload: {},
    };

    // @ts-ignore
    expect(showHiddenContent(initialState, action)).toEqual(finalState);
  });

  test('show hidden content', () => {
    const initialState = false;
    const finalState = true;
    const action = {
      type: atypes.TOGGLE_HIDDEN_CONTENT,
    };

    expect(showHiddenContent(initialState, action)).toEqual(finalState);
  });
});
