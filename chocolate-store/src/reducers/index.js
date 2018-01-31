import { combineReducers } from "redux";
import { chocolateReducer } from "./chocolates";
import { searchReducer } from "./search";

export default combineReducers({
  chocolateState: chocolateReducer,
  searchState: searchReducer
});
