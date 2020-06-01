import { combineReducers } from 'redux'
import authReducer from './authReducer'
import streamsReducer from './streamsReducer'
import { reducer as reduxForm } from 'redux-form'

export default combineReducers({
  auth: authReducer,
  streams: streamsReducer,
  form: reduxForm
})
