/* eslint-disable */

import store from "../../../store";

import {
  SET_FIELD,
  ADD_SUBSECTION,
  ERASE_SUBSECTION,
  REMOVE_SUBSECTION,
} from "../../../reducers/form";

class Form {
  setField = (section, subsection, code, value) => {
    store.dispatch({
      type: SET_FIELD,
      data: { section, subsection, code, value, }
    })
  }
  
  addSubSection = (section) => {
    store.dispatch({
      type: ADD_SUBSECTION,
      data: { section }
    })
  }

  eraseSubSection = (section) => {
    store.dispatch({
      type: ERASE_SUBSECTION,
      data: { section }
    })
  }
  
  removeSubSection = (section) => {
    store.dispatch({
      type: REMOVE_SUBSECTION,
      data: { section }
    })
  }
}

export default Form;