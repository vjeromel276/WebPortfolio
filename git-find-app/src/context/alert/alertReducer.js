import { REMOVE_ALERT, SET_ALERT } from "../types";

export const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
