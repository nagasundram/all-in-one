import React, { Component } from "react";
import { Router, Route, HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import config from "./config";
import { connect } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import Snackbar from "@material-ui/core/Snackbar";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={alert && alert.isOpen}
          message={alert && alert.message}
        />
        <Router history={history}>
          <React.Fragment>
            <PrivateRoute exact path="/all-in-one/" component={HomePage} />
            <Route path="/all-in-one/login" component={LoginPage} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
