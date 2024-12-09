import axios from "axios"

export const AUTH_START="AUTH_START";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGOUT="LOGOUT";
export const AUTH_FAILURE="AUTH_FAILURE";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";


export const authStart=()=>({
type:AUTH_START,
});

export const login=(users)=>({
type:LOGIN_SUCCESS,
payload:users,
});

export const logout=()=>({
    type:LOGOUT,

});

export const failed=(error)=>({
    type:AUTH_FAILURE,
    payload:error,
});
export const signInUser = (userData) => {
    return async (dispatch) => {
      dispatch({ type: SIGN_IN_USER });
      try {
        const existingUsers = await axios.get("http://localhost:3200/users");
        const userExists = existingUsers.users.some(
          (user) => user.email === userData.email
        );
  
        if (!userExists) {
          dispatch({
            type: SIGN_IN_USER_ERROR,
            payload: "User not found. Please sign up.",
          });
          return;
        }
  
        dispatch({ type: SIGN_IN_USER_SUCCESS });
        const res = await axios.post("http://localhost:3200/users", userData);
        dispatch({ type: SAVE_USER_SUCCESS, payload: res.data });
      } catch (error) {
        dispatch({ type: SIGN_IN_USER_ERROR, payload: error.message });
      }
    };
  };