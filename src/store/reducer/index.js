import TYPE from '../action/types'
const defaultState = {
    weather:''
}
const reducer  = (state = defaultState,action) => {
    const data = action.data
    switch (action.type) {
        case TYPE.TYPE_DATA_WEATHER:
            return{
                weather:data
            }
        case TYPE.NET_WEATHER:
            return{
                weather:data
            }
        default:
            return state
    }
}

export default reducer