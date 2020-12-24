import TYPE from '../types'

export function actionWeather (data)  {
    return {
        type: TYPE.TYPE_DATA_WEATHER,
        data
    }
}
export function actionNetWeather (data)  {
    return {
        type: TYPE.NET_WEATHER,
        data
    }
}

export function actionWeatherFresh (data) {
    return {
        type:TYPE.TYPE_EATHER_FRESH,
        data
    }
}

export function actionWeatherData (city) {
    return (dispatch)=> {
        const urlEncode = encodeURI(city)
        const url = `http://apis.juhe.cn/simpleWeather/query?city=${urlEncode}&key=a91cee95b92875ee341e57fc54ac09b1`
        fetch(url)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('network in error')
        })
        .then(res=>{
            const action = actionNetWeather(res)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}