import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import LockIcon from "@material-ui/icons/LockOutlined";
import UnLockIcon from "@material-ui/icons/LockOpenOutlined";

import green from "@material-ui/core/colors/green";

import "../css/home.css";
import { userActions } from "../actions";

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -12,
    marginTop: 10
  }
});
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, classes } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="model">
        <form name="form" onSubmit={this.handleSubmit}>
          <Grid container justify="center" spacing={16}>
            <Grid item>
              <TextField
                error={submitted && !username}
                type="text"
                label="email"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                error={submitted && !password}
                type="password"
                label="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Grid>

            <Grid item>
              <Fab color="primary" type="submit">
                {loggingIn ? <UnLockIcon /> : <LockIcon />}
              </Fab>
              {loggingIn && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
const withStyle = withStyles(styles)(connectedLoginPage);
export { withStyle as LoginPage };
