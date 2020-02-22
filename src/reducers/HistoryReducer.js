import { ON_TOGGLE_SHOW_HISTORY } from '../constants/ActionTypes';

const initialState = {
  showHistory: false
};

function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ON_TOGGLE_SHOW_HISTORY:
      return {
        ...state,
        showHistory: !state.showHistory
      };
    default:
      return state;
  }
}

export default historyReducer;
