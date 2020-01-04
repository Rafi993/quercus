import showHiddenContent from '../showHiddenContent';
import * as atypes from '../../constants/actionTypes';

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
