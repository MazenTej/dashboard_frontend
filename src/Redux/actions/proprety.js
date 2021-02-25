import { SET_VIEW } from "./types";

export const setView = (viewId) => {
  console.log("action id", viewId);

  return {
    type: SET_VIEW,
    payload: viewId,
  };
};
