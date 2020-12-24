import TYPE from '../../action/types'
const defaultState = {
    newsData:null,
    isFresh:false
}
const newsReducers = (state=defaultState,action) =>{
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPE.TYPE_NEWS_NET:
            newState.newsData = action.data
            newState.isFresh = false
            return newState
        case TYPE.TYPE_NEWS_FRESH:
            newState.isFresh = action.data
            return newState
        default:
            return state;
    }
}

export default newsReducers