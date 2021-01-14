// 拆分reducer
import {combineReducers} from 'redux'
import newsReducers from './news'
import weatherReducer from './weather'
import bookReducer from './book'

const reducerRouter = combineReducers({
    newsReducers,
    weatherReducer,
    bookReducer
})

export default reducerRouter