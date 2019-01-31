import React, { Fragment } from "react";
import { connect } from "react-redux";

import "../css/home.css";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import icon from "../assets/images/icon.png";
const styles = theme => ({
  paper: {
    paddingBottom: 50,
    marginTop: 5,
    marginBottom: 15,
    height: 140,
    width: 100
  },
  logo: {
    width: 50,
    marginTop: 40
  }
});

class Categories extends React.Component {
  render() {
    const { categories, classes } = this.props;
    return (
      <React.Fragment>
        {categories.loading && <CircularProgress color="primary" />}
        {categories.error && <span>ERROR: {categories.error}</span>}
        {categories.items && (
          <Grid container justify="center" spacing={8}>
            {categories.items.map((category, index) => (
              <Grid key={category.id} item>
                <Zoom
                  in={category.id > 0}
                  {...(category.id > 0 ? { timeout: 1000 } : {})}
                >
                  <Fragment>
                    <Typography component="h5" variant="inherit" align="center">
                      {category.name}
                    </Typography>
                    <Paper
                      className={classes.paper}
                      align="center"
                      elevation={10}
                    >
                      <img src={category.image_url} className={classes.logo} />
                    </Paper>
                  </Fragment>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;
  return {
    categories
  };
}
Categories.propTypes = {
  classes: PropTypes.object.isRequired
};
const connectedCategories = connect(mapStateToProps)(Categories);
const withStyle = withStyles(styles)(connectedCategories);
export { withStyle as Categories };
