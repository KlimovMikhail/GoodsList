import { combineReducers } from 'redux'

import { formReducer } from './formReducer'
import { goodsReducer } from './goodsReducer'

export const rootReducer = combineReducers({
  formReducer,
  goodsReducer
})