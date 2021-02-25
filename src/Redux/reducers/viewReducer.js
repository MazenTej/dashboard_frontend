import { SET_VIEW } from "../actions/types";
const initialState = "";
export const viewReducer = (state = initialState, action) => {
  console.log("paylaod", action);
  switch (action.type) {
    case SET_VIEW:
      return action.payload;

    default:
      return state;
  }
};
