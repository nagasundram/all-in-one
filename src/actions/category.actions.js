import { categoryConstants } from "../constants";
import { categoryService } from "../services";

export const categoryActions = {
  getCategories
};

function getCategories() {
  return dispatch => {
    dispatch(request());

    categoryService
      .getCategories()
      .then(
        categories => dispatch(success(categories)),
        error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: categoryConstants.CATEGORIES_REQUEST };
  }
  function success(categories) {
    return { type: categoryConstants.CATEGORIES_SUCCESS, categories };
  }
  function failure(error) {
    return { type: categoryConstants.CATEGORIES_FAILURE, error };
  }
}
