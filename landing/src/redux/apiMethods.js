import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import { publicCall } from "./urlCalls";

export const emaillogin = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const res = await publicCall.post("/auth/emaillogin", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const emailRegister = async (dispatch, user) => {
  dispatch(registerRequest());
  try {
    const res = await publicCall.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
