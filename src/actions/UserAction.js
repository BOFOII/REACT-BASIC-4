import axios from 'axios';

export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const ADD_USER = 'ADD_USER';
export const CLEAR_ALERT = 'CLEAR_ALERT';
export const DELETE_USER = 'DELETE_USER';

export const getUserList = () => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/XarraXPMMP/JSON-Users/users')
      .then(response => {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        });
      })
      .catch(error => {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        });
      })
  }
}

export const getUserDetail = (id) => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/XarraXPMMP/JSON-Users/users/' + id)
    .then(response => {
      dispatch({
        type: GET_USER_DETAILS,
        payload: {
          data: response.data,
          errorMessage: false,
        }
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_DETAILS,
        payload: {
          data: false,
          errorMessage: error.message,
        }
      })
    })
  }
}

export const deleteUserDetails = () => {
  return dispatch => {
    dispatch({
      type: GET_USER_DETAILS,
      payload: {
        data: false,
        errorMessage: false,
      }
    })
  }
}

export const postUser = (payload_data) => {
  return dispatch => {
    axios.post('https://my-json-server.typicode.com/XarraXPMMP/JSON-Users/users/', payload_data)
    .then(response => {
      dispatch({
        type: ADD_USER,
        payload: {
          data: response.data,
          errorMessage: false,
          success: true,
          error: false,
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_USER,
        payload: {
          data: false,
          errorMessage: error.message,
          error: true,
          success: false,
        }
      })
    })
  }
}

export const clearAlert = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_ALERT,
      payload: {
        error: false,
        success: false,
      }
    })
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    axios.delete('https://my-json-server.typicode.com/XarraXPMMP/JSON-Users/users/' + id)
    .then(response => {
      dispatch({
        type: DELETE_USER,
        payload: {
          data: response.data,
          errorMessage: false,
        }
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_USER,
        payload: {
          data: false,
          errorMessage: error.message,
        }
      })
    })
  }
}



