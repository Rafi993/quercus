import * as atypes from '../constants/actionTypes';

import { ToggleHiddenContent } from '../types/actions';

export default function(state: boolean = false, { type }: ToggleHiddenContent) {
  switch (type) {
    case atypes.TOGGLE_HIDDEN_CONTENT:
      return !state;
    default:
      return state;
  }
}
