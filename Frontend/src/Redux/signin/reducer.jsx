import { LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT} from "./action";


const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
  successMessage: '',
};

// Reducer to handle login and registration states
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      case LOGOUT:
        return {
          ...state,
          user: null,  
          error: null, 
          message: '', 
          isLoggedIn: false, 
        };
    default:
      return state;
  }
};

export default authReducer;
