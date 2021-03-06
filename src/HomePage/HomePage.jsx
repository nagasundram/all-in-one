import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../css/home.css";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";

import { Categories } from "../components";

import { categoryActions } from "../actions";

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    color: "black"
  },
  paper: {
    paddingBottom: 50,
    height: 140,
    width: 100
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0,
    position: "fixed"
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
  content: {
    marginTop: 70
  }
});

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(categoryActions.getCategories());
  }

  render() {
    const { user, categories, classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.root}>
          <AppBar color="inherit">
            <Typography className={classes.text} variant="h5" gutterBottom>
              CATEGORIES
            </Typography>
          </AppBar>
          <Grid
            container
            justify="center"
            spacing={16}
            className={classes.content}
          >
            <Categories />
          </Grid>
        </Grid>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" gutterBottom color="inherit" noWrap={true}>
              {user.email}
            </Typography>
            <Fab
              color="secondary"
              aria-label="Add"
              className={classes.fabButton}
            >
              <AddIcon />
            </Fab>
            <Link
              to="/all-in-one/login"
              color="inherit"
              className="white"
              title="Logout"
            >
              <LogoutIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { categories, authentication } = state;
  const { user } = authentication;
  return {
    user,
    categories
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
const connectedHomePage = connect(mapStateToProps)(HomePage);
const withStyle = withStyles(styles)(connectedHomePage);
export { withStyle as HomePage };
