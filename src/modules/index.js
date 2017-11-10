import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { reducer as form } from "redux-form";
import twitter from "./twitter";

export default combineReducers({
  router,
  twitter,
  form
});
