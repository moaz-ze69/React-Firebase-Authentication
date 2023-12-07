import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
