import { ADD_USER, CLEAR_ALERT, DELETE_USER, GET_USER_DETAILS, GET_USER_LIST } from "../actions/UserAction";

const initialState = {
  getUserList: false,
  getErrorUser: false,
  getUserDetails: false,
  getErrorUserDetails: false,
  error: false,
  success: false,
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        getErrorUser: action.payload.errorMessage
      }
    case GET_USER_DETAILS:
      return {
        ...state,
        getUserDetails: action.payload.data,
        getErrorUserDetails: action.payload.errorMessage
      }
    case ADD_USER:
      return {
        ...state,
        getUserList: [...state.getUserList, action.payload.data],
        error: action.payload.error,
        success: action.payload.success,
      }
    case CLEAR_ALERT:
      return {
        error: action.payload.error,
        success: action.payload.success,
      }
    case DELETE_USER:
      let users = state.getUserList.filter((element, index) => index !== action.payload.data);
      return {
        ...state,
        getUserList: users,
      }
    default:
      return state;
  }
}

export default users;
