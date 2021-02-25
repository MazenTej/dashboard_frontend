import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { viewReducer } from "./viewReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  err: errorReducer,
  view: viewReducer,
});
