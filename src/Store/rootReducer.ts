// #region Global Imports
import { combineReducers } from 'redux'
// #endregion Global Imports

// #region Local Imports
import { studentReducer } from './Students'
// #endregion Local Imports

export default combineReducers({
  students: studentReducer,
})
