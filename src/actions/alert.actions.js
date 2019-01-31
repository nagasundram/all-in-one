import { alertConstants } from "../constants";

export const alertActions = {
  show,
  clear
};

function show(message) {
  return { type: alertConstants.SHOW, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}
