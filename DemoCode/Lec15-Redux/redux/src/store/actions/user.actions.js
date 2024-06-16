import { LOGIN, LOGOUT } from "../constants";
import { createAction } from "../store";

// Actions that utilize our createAction Function
// Note: These are payload-less
export const loginAction = () => createAction(LOGIN);

export const logoutAction = () => createAction(LOGOUT);
