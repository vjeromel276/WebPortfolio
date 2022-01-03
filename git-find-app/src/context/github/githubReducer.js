import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  REMOVE_ALERT,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
} from "./types";

export const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
