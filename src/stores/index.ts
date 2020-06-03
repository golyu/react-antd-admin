import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { globalReducer } from '~/reducers/gloabal.reducer'
import { tagsViewReducer } from '~/reducers/tagsView.reducer'
import { userReducer } from '~/reducers/user.reducer'

const rootReducer = combineReducers({
  globalReducer,
  userReducer,
  tagsViewReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
