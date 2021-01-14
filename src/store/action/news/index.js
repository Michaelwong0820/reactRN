import TYPE from '../types'

export function actionNetNews (data,category)  {
    return {
        type: TYPE.TYPE_NEWS_NET,
        data,
        category
    }
}
export function actionNewsFresh (data,category)  {
    return {
        type: TYPE.TYPE_NEWS_FRESH,
        data,
        category
    }
}

export function actionNewsData (category) {
    console.log('---',category);
    return (dispatch)=> {

        const url = `http://v.juhe.cn/toutiao/index?type=${category}&key=25c017e18f559ef538308b1c2a891f23`
        fetch(url)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('network in error')
        })
        .then(res=>{
            const action = actionNetNews(res,category)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e);
        })
    }
}