import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import config from "../config";

import { categoryActions } from "../actions";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(categoryActions.getCategories());
  }

  render() {
    const { user, categories } = this.props;
    return (
      <div className="col-md-12 col-md-offset-3">
        <h6 className="left">
          Hi {user.email}!<Link to="/all-in-one/login">Logout</Link>
        </h6>
        {categories.loading && <em>Loading categories...</em>}
        {categories.error && (
          <span className="text-danger">ERROR: {categories.error}</span>
        )}
        {categories.items && (
          <ul>
            {categories.items.map((category, index) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
        <p />
      </div>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
