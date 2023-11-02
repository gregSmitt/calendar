/* eslint-disable */

import store from "../../../store";

import {
  APP_LOADED,
  APP_SET_DEFAULT,
  APP_SET_ERROR,
  APP_SET_LOADING,
  APP_SET_SEND,
  APP_UNSET_ERROR
} from "../../../reducers/app";

class App {
  setLoading = () => {
    store.dispatch({
      type: APP_SET_LOADING,
    });
  }

  endLoading = () => {
    store.dispatch({
      type: APP_LOADED,
    });
  }

  setError = (error) => {
    store.dispatch({
      type: APP_SET_ERROR,
      data: {
        error_description: error,
      }
    });
  }

  unsetError = () => {
    store.dispatch({
      type: APP_UNSET_ERROR,
    });
  }

  setSend = () => {
    store.dispatch({
      type: APP_SET_SEND,
    });
  }
  
  setDefault = () => {
    store.dispatch({
      type: APP_SET_DEFAULT,
    });
  }
}

export default App;