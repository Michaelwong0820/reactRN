import TYPE from '../../action/types'
const defaultState = {
    weather: '',
    isFresh:false
}
const weatherReducer = (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const data = action.data
    switch (action.type) {
        case TYPE.NET_WEATHER:
            newState.weather = data
            newState.isFresh = false
            return newState
            // return {
            //     // ...state,
            //     // weather: data,
            //     // isFresh:false
                
                
            // }
        case TYPE.TYPE_EATHER_FRESH:
            // return {
            //     ...state,
            //     isFresh: data
            // }
            newState.isFresh = data
        default:
            return state
    }
}

export default weatherReducer