import { AUTH_START,LOGIN_SUCCESS,
    LOGOUT,
    AUTH_FAILURE,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    SIGN_IN_USER,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_ERROR,} from "./action";

  
  const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_START:
      case REGISTER_USER:
      case SIGN_IN_USER:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
      case SIGN_IN_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          isAuthenticated: true,
          error: null,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      case AUTH_FAILURE:
      case REGISTER_USER_ERROR:
      case SIGN_IN_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  