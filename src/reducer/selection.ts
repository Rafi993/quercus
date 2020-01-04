import * as R from 'ramda';

import * as atypes from '../constants/actionTypes';
import { Selection } from '../types/state';
import { ToggleSelection } from '../types/actions';

export default function(
  state: Selection = [],
  { type, payload }: ToggleSelection
) {
  switch (type) {
    case atypes.TOGGLE_SINGLE_CHILD_SELECTION:
      if (R.equals(state, [payload.child])) {
        return [];
      }
      return [payload.child];
    case atypes.SET_CURRENT_PATH:
      return [];
    default:
      return state;
  }
}

export const isSelected = (state: Selection, name: string) =>
  R.includes(name, state);
