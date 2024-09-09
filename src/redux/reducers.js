import { FETCH_CHARACTERS_SUCCESS } from './actions';

const initialState = {
  characters: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
