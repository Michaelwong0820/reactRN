import TYPE from '../types'

export function actionNetNews (data)  {
    return {
        type: TYPE.TYPE_NEWS_NET,
        data
    }
}
export function actionNewsFresh (data)  {
    return {
        type: TYPE.TYPE_NEWS_FRESH,
        data
    }
}

export function actionNewsData (type) {
    return (dispatch)=> {

        const url = `http://v.juhe.cn/toutiao/index?type=${type}&key=25c017e18f559ef538308b1c2a891f23`
        fetch(url)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('network in error')
        })
        .then(res=>{
            const action = actionNetNews(res)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}