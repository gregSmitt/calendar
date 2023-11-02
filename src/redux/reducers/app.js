export const APP_SET_ERROR = 'APP_SET_ERROR';
export const APP_UNSET_ERROR = 'APP_UNSET_ERROR';
export const APP_SET_LOADING = 'APP_SET_LOADING';
export const APP_LOADED = 'APP_LOADED';

export const APP_SET_SEND = 'APP_SET_SEND';
export const APP_SET_DEFAULT = 'APP_SET_DEFAULT';

const initState = {
  send: false,
  loading: false,
  error: false,
  error_description: '',
}

function reducer(state = initState, action) {
  switch (action.type) {
    case APP_SET_LOADING:
      return { ...state, loading: true };
    case APP_LOADED:
      return { ...state, loading: false };
    case APP_SET_ERROR:
      return {
        ...state,
        error: true,
        error_description: action.data.error_description,
      };
    case APP_UNSET_ERROR:
      return {
        ...state,
        error: false,
        error_description: '',
      };
    case APP_SET_SEND:
      return { ...state, send: true };
    case APP_SET_DEFAULT:
      return { ...state, send: false };
    default:
      return state;
  }
}

export default reducer;