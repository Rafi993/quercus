import * as atypes from '../constants/actionTypes';

import { ToggleHiddenContent, ToggleSelection } from '../types/actions';

export const toggleHiddenContent = (): ToggleHiddenContent => ({
  type: atypes.TOGGLE_HIDDEN_CONTENT,
});

export const toggleSelection = (child: string): ToggleSelection => ({
  type: atypes.TOGGLE_SINGLE_CHILD_SELECTION,
  payload: {
    child,
  },
});
