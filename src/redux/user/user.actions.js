import {SET_CURRENT_USER} from "./user.constants.js";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
