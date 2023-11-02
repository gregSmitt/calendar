import { combineReducers } from 'redux';

import app from './app';
import form from './form';

const reducer = combineReducers({
  app,
  form,
});

export default reducer;