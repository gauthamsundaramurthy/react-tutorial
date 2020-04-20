import {createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import toDoReducers from './reducers'

const logger = createLogger();
const store = createStore(toDoReducers, applyMiddleware(logger))

export default store