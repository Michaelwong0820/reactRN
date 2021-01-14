import TYPE from '../../action/types'
const defaultState = {
    top: {
        newsData: null,
        isFresh: false
    },
    shehui: {
        newsData: null,
        isFresh: false
    },
    guonei: {
        newsData: null,
        isFresh: false
    },
    guoji: {
        newsData: null,
        isFresh: false
    }
}
const newsReducers = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPE.TYPE_NEWS_NET:
            var category = action.category
            newState[category].newsData = action.data
            newState[category].isFresh = false
            return newState
        case TYPE.TYPE_NEWS_FRESH:
            var category = action.category
            newState[category].isFresh = action.data
            return newState
        default:
            return state;
    }
}

export default newsReducers