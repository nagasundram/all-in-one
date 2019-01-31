import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SHOW:
      return {
        type: "alert-success",
        message: action.message,
        isOpen: true
      };
    case alertConstants.CLEAR:
      return {isOpen: false};
    default:
      return state;
  }
}
