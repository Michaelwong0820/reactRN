// 拆分reducer
import {combineReducers} from 'redux'
import newsReducers from './news'
import weatherReducer from './weather'

const reducerRouter = combineReducers({
    newsReducers,
    weatherReducer
})

export default reducerRouter