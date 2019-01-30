import { categoryConstants } from "../constants";

export function categories(state = {}, action) {
  switch (action.type) {
    case categoryConstants.CATEGORIES_REQUEST:
      return {
        loading: true
      };
    case categoryConstants.CATEGORIES_SUCCESS:
      return {
        items: action.categories
      };
    case categoryConstants.CATEGORIES_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
