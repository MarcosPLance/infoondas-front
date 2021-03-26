import { applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer as toastrReducer } from 'react-redux-toastr'

import Reactotron from '../plugins/ReactotronConfig'

import thunk from 'redux-thunk'
import multi from 'redux-multi'

//importar reducers
import SignReducer from "./sign/sign.reducer";
import BeachesReducer from './beaches/beaches.reducer'
import CommentsReducer from './comments/comments.reducer'


// modularizações dos reduces
const reducers = combineReducers({
  auth: SignReducer,
  toastr: toastrReducer,
  beaches: BeachesReducer,
  comments: CommentsReducer,
});

// middlewares de confifurações do projeto
const middleware = [thunk, multi];

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(
  applyMiddleware(...middleware),
  Reactotron.createEnhancer()
  );

// criação da store
const store = createStore(reducers, compose);


export default store