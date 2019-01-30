import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { categories } from "./categories.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication,
  categories,
  alert
});

export default rootReducer;
