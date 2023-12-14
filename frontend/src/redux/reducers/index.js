import { combineReducers } from "redux";

import ui from "./ui";

// combining all reducer to root reducer (i.e root reducer is used for store creation)
const createRootReducer = () =>
  combineReducers({
    ui
  });

export default createRootReducer;