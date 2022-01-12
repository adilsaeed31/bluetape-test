// #region Global Imports
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// #endregion Global Imports

// #region Local Imports
import Reducers from './rootReducer'
// #endregion Local Imports

const initialState = {}

const store: any = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
