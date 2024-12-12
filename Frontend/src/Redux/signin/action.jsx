
import axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT'; 


// Login Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (data) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://nayka-backend-l0iw.onrender.com/users/signin', data);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('userId', response.data.userId);
      dispatch(loginSuccess(response.data));
    }
  } catch (err) {
    dispatch(loginFailure(err.response?.data?.err || 'Login failed. Please try again.'));
  }
};

// Register Action Creators
export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`https://nayka-backend-l0iw.onrender.com/users/register`, data);
    if (response.status === 201) {
      dispatch(registerSuccess('Registration successful! Please log in.'));
    }
  } catch (err) {
    dispatch(registerFailure(err.response?.data?.message || 'Registration failed. Please try again.'));
  }
};



///logout
export const logout = () => {
  return (dispatch) => {
    // Remove user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Dispatch the LOGOUT action
    dispatch({ type: LOGOUT });
  };
};