import React, { Component } from "react";
import { Router, Route, HashRouter } from "react-router-dom";
import config from "./config";
import { connect } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

import logo from "./logo.svg";
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
      <div>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert && alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/all-in-one/" component={HomePage} />
                <Route path="/all-in-one/login" component={LoginPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
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
