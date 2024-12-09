import axios from "axios";


export const AUTH_START = "AUTH_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";

// Auth Start
export const authStart = () => ({
  type: AUTH_START,
});

// Login
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

// Auth Failure
export const authFailure = (error) => ({
  type: AUTH_FAILURE,
  payload: error,
});

// Register
export const registerUser = (users) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_USER });
    try {
      const existingUsers = await axios.get("https://nayka-backend-7whp.onrender.com/users/register");
      const userExists = existingUsers.data.some(
        (user) => user.email === users.email
      );

      if (userExists) {
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: "User already exists. Please log in.",
        });
        return;
      }

      const res = await axios.post("https://nayka-backend-7whp.onrender.com/users/register", users);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
    }
  };
};

// Sign In
export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_IN_USER });
    try {
      const existingUsers = await axios.get("https://nayka-backend-7whp.onrender.com/users/login");
      const user = existingUsers.data.find(
        (u) => u.email === userData.email && u.password === userData.password
      );

      if (!user) {
        dispatch({
          type: SIGN_IN_USER_ERROR,
          payload: "Invalid credentials. Please try again.",
        });
        return;
      }

      dispatch({ type: SIGN_IN_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: SIGN_IN_USER_ERROR, payload: error.message });
    }
  };
};
