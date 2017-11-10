import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import twitter from "./twitter";

export default combineReducers({
  router,
  twitter
});
