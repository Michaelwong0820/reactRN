import TYPE from '../../action/types'

const defaultState = {
    bookData: {},
    isFresh: false,
    bookList:{}
}

const bookReducers = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPE.TYPE_DATA_BOOK:
            newState.bookData = action.data
            return newState
        case TYPE.TYPE_BOOK_FRESH:
            newState.isFresh = action.data
            return newState
        case TYPE.TYPT_BOOK_NET:
            newState.bookList = action.data
            return newState
        default:
            return state
    }
}

export default bookReducers