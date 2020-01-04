import selection from '../selection';
import * as atypes from '../../constants/actionTypes';
import { Selection } from '../../types/state';
import { ToggleSelection } from '../../types/actions';

describe('selecting contents of the folder', () => {
  test('checking initial state', () => {
    const initialState: Selection = [];
    const finalState: Selection = [];
    const action = {
      type: 'DEFAULT',
      payload: {},
    };

    // @ts-ignore
    expect(selection(initialState, action)).toEqual(finalState);
  });

  test('adding one item to the selection', () => {
    const initialState: Selection = ['folder1'];
    const finalState: Selection = ['stuff'];
    const action: ToggleSelection = {
      type: atypes.TOGGLE_SINGLE_CHILD_SELECTION,
      payload: {
        child: 'stuff',
      },
    };

    expect(selection(initialState, action)).toEqual(finalState);
  });

  test('unselecting selected child', () => {
    const initialState: Selection = ['stuff'];
    const finalState: Selection = [];
    const action: ToggleSelection = {
      type: atypes.TOGGLE_SINGLE_CHILD_SELECTION,
      payload: {
        child: 'stuff',
      },
    };

    expect(selection(initialState, action)).toEqual(finalState);
  });

  test('set current path', () => {
    const initialState: Selection = ['stuff'];
    const finalState: Selection = [];
    const action: ToggleSelection = {
      type: atypes.SET_CURRENT_PATH,
      payload: {},
    };

    expect(selection(initialState, action)).toEqual(finalState);
  });
});
