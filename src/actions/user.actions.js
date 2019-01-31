import config from "../config";
import { userConstants } from "../constants";
import { Router, Route, HashRouter } from "react-router-dom";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/all-in-one");
        dispatch(alertActions.show("Successfully logged In"));
        setTimeout(() => dispatch(alertActions.clear()), 3000);
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.show(error));
        setTimeout(() => dispatch(alertActions.clear()), 3000);
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return dispatch => {
    userService.logout();
    return {
      type: userConstants.LOGOUT
    };
  };
}
