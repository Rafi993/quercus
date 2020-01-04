import * as atypes from '../constants/actionTypes';

import { ToggleHiddenContent } from '../types/actions';

export const toggleHiddenContent = (): ToggleHiddenContent => ({
  type: atypes.TOGGLE_HIDDEN_CONTENT,
});
